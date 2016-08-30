// require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
require('../assets/css/style.less');
require('./actions/action.js');
require('./store/store.js');
require('./router/router.js');

if (process.env.NODE_ENV === 'production') {
  const ReactGA = require('react-ga');
  ReactGA.initialize(process.env.GA_UID);
}
