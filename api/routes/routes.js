const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const livereload = require('express-livereload');

livereload(app, config={})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user', (req, res) => {
  res.json(
    {
      "user": {
        name: 'Jammy',
        profilePicture: 'http://www.actuanews.fr/photo/art/grande/6102770-9111496.jpg?v=1386069669',
        stats:{
          esteemCount: 42,
          averageEsteem: 645,
          lastChange: '26/01/1996'
        },
        leaderboard: [
          {
            id: 1,
            'picture': 'http://cdn-media.ellentv.com/2014/11/06/jim-carrey-episode-480x360.jpg',
            'name': 'Jim Carrey',
            'esteem': 432
          },
          {
            id:2,
            'picture': 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
            'name': 'Leonardo Caprio',
            'esteem': 123
          }
        ]
      }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
