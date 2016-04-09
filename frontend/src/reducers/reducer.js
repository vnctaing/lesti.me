import * as actions from '../actions/action.js';

const initialState = {
  "appraiser": {
    name: '',
    profilePicture: '',
    stats:{
      esteemCount: null,
      averageEsteem: null,
      lastChange: null
    },
    appraisees: []
  },
  'sign_page':{
    'ui':{
      'failed_sign_in': false
    }
  }
}


function esteemApp(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVED_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        { appraiser: action.appraiser }
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
