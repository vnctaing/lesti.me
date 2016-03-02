require('./actions/action.js');
require('./App.jsx')
fetch('http://localhost:3000/user')
  .then((r)=>r.json())
  .then(json=> console.log(json));
