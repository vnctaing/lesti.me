import * as actions from '../actions/action.js';

const initialState = {
	name: '',
	profilePicture: '',
	appraisees: [],
  'ui': {
    'show_update_appraisee_esteem_modal': false,
    'isFetchingProfile': false
  }
}

export default function profile(state=initialState, action) {
	switch(action.type) {
    case actions.REQUESTING_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        {
        ui: {
          'isFetchingProfile': true
        }
      })
    case actions.RECEIVED_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        action.appraiser,
        {
          ui: {
            'isFetchingProfile': false
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