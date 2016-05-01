import * as actions from '../actions/action.js';

const initialState = {
	name: '',
	profilePicture: '',
	appraisees: [],
  'ui': {
    'show_update_appraisee_esteem_modal': {},
    'isFetchingProfile': false
  }
}

export default function profile(state=initialState, action) {
	switch(action.type) {
    case actions.REQUESTING_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        state.ui.isFetchingProfile = true
      )
    case actions.RECEIVED_APPRAISER_PROFILE:
      return Object.assign(
        {},
        state,
        action.appraiser,
        state.ui.isFetchingProfile = false
    )
    case actions.OPEN_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      state.ui.show_update_appraisee_esteem_modal[action.appraiseeId] = true
    )
    case actions.CLOSE_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      state.ui.show_update_appraisee_esteem_modal[action.appraiseeId] = false
    )          
    default:
      return state
	}
}