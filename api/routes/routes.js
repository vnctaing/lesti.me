const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

// Mongoose Models Imports
const mongoose = require('mongoose');
const Appraisee = require('../models/Appraisee');
const User = require('../models/User');
livereload(app, config={})

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


app.get('/user', (req, res) => {
  res.json({
    "user": {
      name: 'Jammy',
      profilePicture: 'http://www.actuanews.fr/photo/art/grande/6102770-9111496.jpg?v=1386069669',
      leaderboard: [
        {
          'id': 1,
          'picture': 'http://cdn-media.ellentv.com/2014/11/06/jim-carrey-episode-480x360.jpg',
          'name': 'Jim Carrey',
          'esteem': 432,
          'description': 'lacteur le plus nul de la terre',
          'lastChange': '26/01/1996'
        },
        {
          'id':2,
          'picture': 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
          'name': 'Leonardo Caprio',
          'esteem': 123,
          'description': 'Acteur oscarise au bout de 6 nomination',
          'lastChange': '26/01/1996'
        }
      ]
    }
  });
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
  });
  res.status(200).send('k');
});

app.post('/login', (req,res)=>{
  User.findOne(req.body, function (err, person) {
    if (err) console.log(err);
    res.json({
      status: 200, 
      username: person.username
    });
  })
});

app.post('/appraisee', (req,res) => {
  const appraiseeToAdd = new Appraisee({
     appraiseeName: req.body.appraiseeName,
     esteem: req.body.esteem,
     description: req.body.description,
     appraiser: req.body.appraiser
  });

  appraiseeToAdd.save(function (err, appraiseeToAdd) {
   if (err) return console.error(err);
   console.log('Successfully Added : ');
   console.log(appraiseeToAdd);
  });
  res.status(200).send('k');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
