import * as actions from '../actions/action.js';

const initialState = {
  'appraiser': {
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
  },
  'user_esteem': {
    'ui': {
      'show_update_appraisee_esteem_modal': false
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
    case actions.OPEN_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      {
        'user_esteem': {
          'ui': {
            'show_update_appraisee_esteem_modal': true
          }
        }
      }
    )
    case actions.CLOSE_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      {
        'user_esteem': {
          'ui': {
            'show_update_appraisee_esteem_modal': false
          }
        }
      }
    )    
    default:
      return state
  }
}

export default esteemApp;
