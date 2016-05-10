import * as actions from '../actions/action.js';
import profile from './profile.js';
import signIn from './signIn.js';
import { combineReducers } from 'redux';

const esteemApp = combineReducers({
  profile,
  signIn,
});


export default esteemApp;
