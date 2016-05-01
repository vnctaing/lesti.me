import * as actions from '../actions/action.js';
import profile from './profile.js';
import signInPage from './signIn.js'
import { combineReducers } from 'redux';



const esteemApp = combineReducers({
	profile,
	signInPage
})


export default esteemApp;
