
'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

// Mongoose Models Imports
const mongoose = require('mongoose');
const Appraisee = require('../models/Appraisee');
const Appraiser = require('../models/Appraiser');
const Comment = require('../models/Comment');

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
  Appraiser.findOne({name: req.params.appraiserName}, function (err, person) {
    if (err) console.log(err);
  })
  .populate('appraisees')
  .exec(function (err, appraiser) {
    appraiser 
     ? res.json({'status': 200, appraiser})
     : res.json({'status': 400, message: 'Did not find appraiser with these creds'})
  })
});


app.post('/appraiser', (req,res)=>{
  const appraiserToAdd = new Appraiser({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  })

  appraiserToAdd.save((err,appraiserToAdd) => {
    if(err) return console.error(err)
    console.log('Successfully Added : ');
    console.log(appraiserToAdd);
    res.json({
      status: 200,
      appraiserName: appraiserToAdd.name
    })
  });
});

app.post('/login', (req,res)=>{
  Appraiser.findOne(req.body, function (err, appraiser) {
    if (err) console.log(err);
  })
  .exec(function(err,appraiser){
    appraiser 
     ? res.json({'status': 200, appraiser})
     : res.json({'status': 400, message: 'Did not find appraiser with these creds'})
  })
});

app.post('/appraisee', (req,res) => {
  let appraiser = null;
  Appraiser.findOne({name: req.body.appraiser}, function (err, person) {
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
    });
  })
  .then((newAppraisee) => {
    Appraiser.update(
      { _id: newAppraisee._appraiser},
      { 
        $push: { 
          "appraisees": newAppraisee._id,
        }
      },
      {upsert:true}
    )
    .exec();
  })
})

app.put('/appraisee/:appraiseeId', (req,res) => {
  console.log('updating')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/comment', (req,res) => {
  const commentToAdd = new Comment({
    author: req.body.author,
    content: req.body.content,
    _appraisee: req.body._appraisee
  })

  commentToAdd
    .save((err,commentToAdd) => {
      if(err) return console.error(err)
      console.log('Successfully Added : ');
      console.log(commentToAdd);
      Appraisee.update(
        { _id: req.body._appraisee},
        { 
          $push: {  "_comments": commentToAdd._id }
        },
        { upsert:true }
      ).exec();
    })
})

// app.get('/comments/appraisee/:appraiseeId', (req,res) => {
  
// })
