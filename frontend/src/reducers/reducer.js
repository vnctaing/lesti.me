// import {RECEIVED_USER_PROFILE} from '../actions/action.js'
import * as actions from '../actions/action.js';

const initialState = {
  "user": {
    profilePicture: '',
    stats:{
      esteemCount: null,
      averageEsteem: null,
      lastChange: null
    },
    leaderboard: []
  },
  'sign_page':{
    'ui':{
      'failed_sign_in': false
    }
  }
}


function esteemApp(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVED_USER_PROFILE:
      return Object.assign(
        {},
        state,
        { user: action.user }
    )
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
          'ui': {
            'failed_sign_in': false
          }
        }
      }
    )    
    default:
      return state
  }
}

export default esteemApp;
