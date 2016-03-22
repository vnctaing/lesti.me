const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

livereload(app, config={})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected !')
});




const Schema = mongoose.Schema;
const appraiseeSchema = new Schema({ 
    appraiseeName: String,
    esteem: Number,
    description: String,
    appraiser: String
});
const Appraisee = mongoose.model('Appraisee', appraiseeSchema);


app.get('/user', (req, res) => {
  res.json(
    {
      "user": {
        name: 'Jammy',
        profilePicture: 'http://www.actuanews.fr/photo/art/grande/6102770-9111496.jpg?v=1386069669',
        },
        leaderboard: [
          {
            id: 1,
            'picture': 'http://cdn-media.ellentv.com/2014/11/06/jim-carrey-episode-480x360.jpg',
            'name': 'Jim Carrey',
            'esteem': 432,
            'description': 'lacteur le plus nul de la terre',
            'lastChange': '26/01/1996'
          },
          {
            id:2,
            'picture': 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
            'name': 'Leonardo Caprio',
            'esteem': 123,
            'description': 'Acteur oscarise au bout de 6 nomination',
            'lastChange': '26/01/1996'
          }
        ]
      
    });
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
   console.log('added',appraiseeToAdd);
  });
  res.status(200).send('k');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
