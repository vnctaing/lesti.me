import * as actions from '../actions/action.js';

const initialState = {
	'ui':{
		'failed_sign_in': false
	}
}

export default function signIn(state=initialState, action){ 
  switch (action.type) {
  	case actions.FAILED_SIGN_IN:
  	  return Object.assign(
  	    {},
  	    state,
  	    {
  	      'sign_page':{
  	        'ui': {
  	          'failed_sign_in': true
  	        }
  	      }
  	    }
  	  )
	  case actions.SUCCESSFULLY_SIGN_IN:
		  return Object.assign(
		    {},
		    state,
		    {
		      'sign_page':{
		        'ui': { 'failed_sign_in': false }
		      }
		    }
		  )
		default:
		  return state
	}
}