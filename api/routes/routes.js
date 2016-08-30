'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const crypto = require('crypto');
const fs = require('fs');
const multer = require('multer');

// Mongoose Models Imports
const mongoose = require('mongoose');
const Appraisee = require('../models/Appraisee');
const Appraiser = require('../models/Appraiser');
const Comment = require('../models/Comment');
const Feed = require('../models/Feed');
const BetaToken = require('../models/BetaToken');

const upload = multer({ dest: 'uploads/' })

const AWS = require('aws-sdk');


if (process.env.NODE_ENV === 'production') {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-1',
  });
} else {
  AWS.config.update({ region: 'eu-west-1' });
}

const s3bucket = new AWS.S3({ params: { Bucket: 'lesti' } });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('frontend')));

// Connect mongoose to mongodb server
if (process.env.NODE_ENV === 'production') {
  const {
    DATABASE_URL,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_PORT } = process.env;

  mongoose.connect(
    `mongodb://${DATABASE_URL}:${DATABASE_PORT}`,
    { user: DATABASE_USER, pass: DATABASE_PASSWORD }
  );
} else {
  mongoose.connect('mongodb://localhost:27017');
}

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected !');
});

app.get('/', (req,res) => {
  res.sendFile(path.resolve('frontend/index.html'));
})


app.get('/appraiser/:appraiserName', (req, res) => {
  Appraiser.findOne(
    { name: req.params.appraiserName },
    { password: 0, email: 0 },
    (err, person) => {
      if (err) console.log(err);
    }
  )
  .populate({
    path: 'appraisees', options: { sort: { esteem: 'desc' } },
  })
  .populate({
    path: 'feeds',
    populate: {
      path: '_appraisee',
      select: 'appraiseeName',
      model: 'Appraisee',
    },
    options: { sort: { createdAt: 'desc' } },
  })
  .exec((err, appraiser) => {
    appraiser
     ? res.json({ status: 200, appraiser })
     : res.json({ status: 400, message: 'Did not find appraiser with these creds'});
  });
});

app.post('/auth/token', (req, res) => {
  const token = req.body.token ? JSON.parse(req.body.token) : '';
  const appraiserIdProvided = Object.keys(token)[0];
  Appraiser.findOne({ _id: appraiserIdProvided }, (err, appraiser) => {
    let status;
    if (err) console.log(err);
    if (appraiser) {
      appraiser.sessionToken === token[appraiserIdProvided]
        ? status = 200
        : status = 400;
    }
    res.json({ status, appraiser });
  });
});


app.post('/appraiser', (req, res) => {

  function checkIsNameAlreadyExist() {
    return Appraiser.find({ name: req.body.name });
  }

  function checkIsEmailAlreadyTaken() {
    return Appraiser.find({ email: req.body.email });
  }

  Promise
    .all([
      checkIsEmailAlreadyTaken(),
      checkIsNameAlreadyExist(),
    ])
    .then((warnings) => {
      if (warnings[0].length) return res.json({ status: 400, errorMessage: 'EMAIL_ALREADY_TAKEN' });
      if (warnings[1].length) return res.json({ status: 400, errorMessage: 'NAME_ALREADY_TAKEN' });
      const appraiserToAdd = new Appraiser({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        sessionToken: crypto.randomBytes(64).toString('hex'),
      });

      appraiserToAdd.save((err, appraiser) => {
        if (err) return console.error(err);
        res.json({
          status: 200,
          appraiserName: appraiser.name,
          appraiser
        });
      });
    });
});

app.post('/login', (req, res) => {
  Appraiser.findOne(req.body, { password: 0, email: 0 }, (err, appraiser) => {
    if (err) console.log(err);
  })
  .exec((err, appraiser) => {
    appraiser
     ? res.json({ status: 200, appraiser })
     : res.json({ status: 400, message: 'Did not find appraiser with these creds' });
  });
});

app.post('/appraisee', (req, res) => {
  const appraiseeToAdd = new Appraisee({
    appraiseeName: req.body.appraiseeName,
    appraiserName: req.body.appraiser,
    _appraiser: req.body.appraiserId,
    esteem: req.body.esteem,
    description: req.body.description,
  });

  appraiseeToAdd.save();

  Appraiser
    .findOne({ _id: req.body.appraiserId }, (err, appraiser) => {
      if (err) console.log(err);
      appraiser.appraisees.push(appraiseeToAdd);
      appraiser.save()
      res.json({
        status: 200,
        appraiser,
        appraiseeToAdd
      })
    })
});

app.put('/appraisee/:appraiseeId', (req, res) => {
  Appraisee
    .findOne({ '_id' : req.body.appraiseeId },
      (err, doc) => {
        if (err) console.log(err);
        if (!doc) console.log('did not found appraisee to update');
        const delta = doc.esteem + req.body.esteemVariation;
        doc.esteem = delta;
        doc.save();
        return doc;
      })
    .then((appraisee) => {
      const feedToAdd = new Feed({
        _appraisee: req.params.appraiseeId,
        _appraiser: appraisee._appraiser,
        reason: req.body.reason,
        esteemVariation: req.body.esteemVariation,
      });
      feedToAdd.save((err) => {
        Feed.populate(feedToAdd, { path: '_appraisee _appraiser' }, (err, feed) => {
          if (err) console.log(err);
        });
      });
      return feedToAdd;
    })
    .then((f) => {
      // Terrible Pyramid of Doom...
      Appraiser
        .findOne({_id: f._appraiser},
        (err, doc) => {
          if (err) console.error(err);
          if (doc) return doc;
        })
        .then((appraiser) => {
          appraiser.feeds.push(f._id);
          appraiser.save();
          res.json({ feed: f, status: 200 });
        });
    });
});


if (process.env.NODE_ENV === 'production') {
  const listeningPort = process.env.PORT || 8080;
  app.listen(listeningPort, () => {
      console.log('Example app listening on port 8080!');
    });
} else {
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

app.post('/comment', (req, res) => {
  const commentToAdd = new Comment({
    author: req.body.author,
    content: req.body.content,
    _appraisee: req.body._appraisee,
  });

  commentToAdd
    .save((err, commentToAdd) => {
      if (err) return console.error(err);
      console.log('Successfully Added : ');
      console.log(commentToAdd);
      Appraisee
        .update(
          { _id: req.body._appraisee },
          {
            $push: { _comments: commentToAdd._id },
          },
          { upsert: true }
        )
        .exec();
      res.json({ status: 200, comment: commentToAdd });
    });
});

app.get('/comments/:appraiseeId', (req, res) => {
  Comment
    .find({ _appraisee: req.params.appraiseeId })
    .sort({ createdAt: 'asc' })
    .exec((err, comments) => res.json({
      status: 200,
      comments,
    }));
});

app.post('/approvals/:appraiseeId', (req, res) => {
  Appraisee
    .findOne({ _id: req.params.appraiseeId },
      (err, doc) => {
        if (err) console.log(err);
        if (!doc) console.log('did not found appraisee to update');
        if (req.body.opts && req.body.opts.purpose === 'cancelApproval') {
          doc.approvals = doc.approvals - 1;
        } else {
          doc.approvals = doc.approvals + 1;
        }
        doc.save();
        return doc;
      })
    .then((appraisee) => res.json({ status: 200, appraisee }));
});

app.put('/betatoken/:betaToken', (req, res) => {
  BetaToken
    .findOne({ betaToken: req.params.betaToken, isConsumed: false },
      (err, doc) => {
        if (err) console.log(err);
        if (!doc) console.log('did not found appraisee to update');
        if (doc) {
          doc.isConsumed = true;
          doc.save();
        }
        return doc;
      })
    .then((betaToken) => res.json({ status: betaToken ? 200 : 404, betaToken }));
})

app.get('/betatoken/:betaToken', (req, res) => {
  BetaToken
    .findOne({ betaToken: req.params.betaToken, isConsumed: false },
      (err, doc) => {
        if (err) console.log(err);
        if (!doc) console.log('did not found appraisee to update');
        return doc;
      })
    .then((betaToken) => res.json({ status: betaToken ? 200 : 404, betaToken }));
});

app.post('/betatoken', (req, res) => {
  const betaTokenToAdd = new BetaToken({
    betaToken: crypto.randomBytes(3).toString('hex'),
    isConsumed: false,
  });

  betaTokenToAdd.save((err, betaTokenToAdd) => {
    if (err) return console.error(err);
    res.json({
      status: 200,
      betaToken: betaTokenToAdd,
    });
  });
});



app.post('/avatar/:appraiserId', upload.single('avatar'), (req, res) => {
  const { file } = req;
  s3bucket
  .upload({
    ACL: 'public-read',
    Body: fs.createReadStream(file.path),
    Key: `profilePicture/${req.params.appraiserId}_${Math.random().toString(36).substr(2, 8)}`,
    ContentType: 'application/octet-stream',
  })
  .send((err, data) => {
    if (err) {
      console.log('error', err)
    } else {
      Appraiser
        .findOne({ _id: req.params.appraiserId },
          (err, doc) => {
            if (err) console.log(err);
            if (!doc) {
              throw 'Did not found appraisee with correspondant _id'
            } else {
              doc.profilePicture = data.Location;
              doc.save();
            }
            res.json({ status: 200, appraiser: doc })
        })
    }
  });
});

app.delete('/appraisee/:appraiseeId', (req, res) => {
  const feeds = Feed
    .find({ _appraisee: req.params.appraiseeId }, (err, docs) => {
      docs.reduce((acc, d) => d.remove(), []);
      return docs;
    });
  const comments = Comment
    .find({ _appraisee: req.params.appraiseeId }, (err, docs) => {
      docs.reduce((acc, d) => d.remove(), []);
      return docs;
    });

  const appraisee = Appraisee
    .findOne({ _id: req.params.appraiseeId }, (err, doc) => {
      if (err) throw 'Could not find an appraisee with this ID';
      doc.remove();
    });

  Promise
    .all([feeds, appraisee, comments])
    .then((p) => {
      Appraiser
        .findOne({ _id: p[1]._appraiser }, (err, appraiser) => {
          appraiser.appraisees = appraiser.appraisees.filter((a) => {
            return a._id !== req.params.appraiseeId;
          });

          appraiser.feeds = appraiser.feeds.filter(feeds => {
            return p[0].filter(b => b._id.toString() !== feeds.toString()).length;
          });

          appraiser.save();

          res.json({ status:200, appraiser });
        });
    });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend/index.html'));
});
