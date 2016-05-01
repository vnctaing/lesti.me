import * as actions from '../actions/action.js';
import profile from './profile.js'
import signIn from './signIn.js'
import { combineReducers } from 'redux'

export default combineReducers({  
  profile,
  signIn
});
