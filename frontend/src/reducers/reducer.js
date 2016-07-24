import * as actions from '../actions/action.js';
import profile from './profile.js';
import signIn from './signIn.js';
import home from './home.js';
import betaAccess from './betaAccess.js';
import { combineReducers } from 'redux';

const esteemApp = combineReducers({
  profile,
  signIn,
  home,
  betaAccess,
});


export default esteemApp;
