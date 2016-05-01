import * as actions from '../actions/action.js';

const initialState = {
  name: '',
  profilePicture: '',
  appraisees: []
}


export default function profile(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVED_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        action.profile
      )
    case actions.OPEN_APPRAISEE_UPDATE_MODAL:
      return Object.assign(
        {},
        state,
        {
          'profile': {
            'ui': { 'show_update_appraisee_esteem_modal': true }
          }
        }
      )      
    case actions.CLOSE_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      {
        'profile': {
          'ui': { 'show_update_appraisee_esteem_modal': false }
        }
      }
    )    
    default:
      return state
  }
}



// profile;