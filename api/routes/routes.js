
'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

// Mongoose Models Imports
const mongoose = require('mongoose');
const Appraisee = require('../models/Appraisee');
const User = require('../models/User');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Connect mongoose to mongodb server
mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected !')
});


app.get('/appraiser/:appraiserName', (req, res) => {
    console.log({username: req.params.appraiserName});
    User.findOne({username: req.params.appraiserName}, function (err, person) {
    if (err) console.log(err);
    if (!person) res.json({status:404, 'message': 'Did not found user with that password'});
  })
  .populate('appraisees')
  .exec(function (err, user) {
    if (err) console.log(err);
    res.json({status:200, appraiser: user});
  })
  // 
  // 
  // res.json({
  //   "status": 200,
  //   "user": {
  //     name: 'Jammy',
  //     profilePicture: 'http://www.actuanews.fr/photo/art/grande/6102770-9111496.jpg?v=1386069669',
  //     leaderboard: [
  //       {
  //         'id': 1,
  //         'picture': 'http://cdn-media.ellentv.com/2014/11/06/jim-carrey-episode-480x360.jpg',
  //         'name': 'Jim Carrey',
  //         'esteem': 432,
  //         'description': 'lacteur le plus nul de la terre',
  //         'lastChange': '26/01/1996'
  //       },
  //       {
  //         'id':2,
  //         'picture': 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
  //         'name': 'Leonardo Caprio',
  //         'esteem': 123,
  //         'description': 'Acteur oscarise au bout de 6 nomination',
  //         'lastChange': '26/01/1996'
  //       }
  //     ]
  //   }
  // });


});


app.post('/user', (req,res)=>{
  const userToadd = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  userToadd.save((err,userToadd) => {
    if(err) return console.error(err)
    console.log('Successfully Added : ');
    console.log(userToadd);
    res.json({
      status: 200,
      appraiserName: userToadd.username
    })
  });
});

app.post('/login', (req,res)=>{
  User.findOne(req.body, function (err, person) {
    if (err) console.log(err);
    if (person) {
      res.json({
        status: 200, 
        username: person.username,
      })
    } else{
      res.json({status:404, 'message': 'Did not found user with that password'});
    }
  })
});

app.post('/appraisee', (req,res) => {
  let appraiser = null;
  User.findOne({username: req.body.appraiser}, function (err, person) {
    if (err) console.log(err);
    person ? appraiser = person._id : console.log('did not found user');
  })
  .then((appraiser)=> {
    const appraiseeToAdd = new Appraisee({
       appraiseeName: req.body.appraiseeName,
       appraiserName: req.body.appraiser,
       _appraiser: appraiser._id,
       esteem: req.body.esteem,
       description: req.body.description
    });

    return appraiseeToAdd.save(function (err, appraiseeToAdd) {
     if (err) return console.error(err);
     console.log('Successfully Added : ');
     console.log(appraiseeToAdd);
    });
  }).then((newAppraisee) => {
    console.log({
            "_id": newAppraisee._id,
          });
    User.update(
      { _id: newAppraisee._appraiser},
      { 
        $push: { 
          "appraisees": newAppraisee._id,
        }
      },
      {upsert:true}
    ).exec()
    .then( function ( result ) { 
        console.log( result )
        resolve( result )
    }, function ( error ) {
        if ( error ) return reject( error )
    });

  })
  // .then(lol=> {
  //   console.log('lol')
  //   res.status(200).send('k')
  // });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
