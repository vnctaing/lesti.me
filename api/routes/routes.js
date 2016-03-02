const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user', (req, res) => {
  res.json(
    {
      "user": {
        profilePicture: 'http://i.skyrock.net/2788/84772788/pics/3207102241_1_2_S1ql29fn.jpg',
        stats:{
          esteemCount: 42,
          averageEsteem: 645,
          lastChange: '26/01/1996'
        },
        leaderboard: [
          {
            'picture': 'https://38.media.tumblr.com/avatar_97cf3b9b5a51_128.png',
            'name': 'Leonardo Di Carprio',
            'esteem': 432
          },
          {
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
