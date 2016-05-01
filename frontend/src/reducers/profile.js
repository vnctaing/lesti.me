import * as actions from '../actions/action.js';

const initialState = {
	name: '',
	profilePicture: '',
	appraisees: [],
  'ui': {
    'show_update_appraisee_esteem_modal': {},
    'appraiseePanel': {},
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
      const appraiseesIds = action.appraiser.appraisees.map((a) => a._id);
      const appraiseePanel = {};
      _.each(appraiseesIds, (ai) => appraiseePanel[ai] = 'estimation');      
      const ui = Object.assign({},state.ui,
        {appraiseePanel : appraiseePanel},
        {isFetchingProfile : false}
      );
      return Object.assign(
        {},
        state,
        action.appraiser,
        {ui}
      );
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

    // case actions.SHOW_COMMENT_SECTION:
    //   return Object.assign({}, state,
    //     state.ui
    //     )
    // case actions.SHOW_ESTIMATION_SECTION:
    //   return Object.assign({}, state,
    //     state.ui
    //     )
    // case actions.REQUESTING_COMMENTS:
    //   return Object.assign({}, state,
    //     state
    //     )
    // case actions.RECEIVED_COMMENTS:          
    //   return Object.assign({}, state,
    //     state
    //     )