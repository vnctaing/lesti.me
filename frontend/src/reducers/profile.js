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
  const newUIState = {
    'ui': {
      'show_update_appraisee_esteem_modal': {},
      'appraiseePanel': {},
      'isFetchingProfile': false
    }
  };

	switch(action.type) {
    case actions.REQUESTING_APPRAISER_PROFILE:
      newUIState.ui.isFetchingProfile = true
      return Object.assign(
        {},
        state,
        newUIState
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
    newUIState.ui.show_update_appraisee_esteem_modal[action.appraiseeId] = true;
    return Object.assign(
      {},
      state,
      newUIState
    )
    case actions.CLOSE_APPRAISEE_UPDATE_MODAL:
    return Object.assign(
      {},
      state,
      state.ui.show_update_appraisee_esteem_modal[action.appraiseeId] = false
    )
    case actions.SHOW_COMMENT_SECTION:
      
      const copyAppraiseePanel = Object.assign({},state.ui.appraiseePanel)
      console.log(state)
      copyAppraiseePanel[action.appraiseeId] = 'comments'
      console.log(state);
      return Object.assign({}, 
         state,
         {'ui': copyAppraiseePanel})
    case actions.SHOW_ESTIMATION_SECTION:

      return Object.assign({}, state,
        state.ui.appraiseePanel
        )
    case actions.REQUESTING_COMMENTS:
      return Object.assign({}, state,
        state
        )
    case actions.RECEIVED_COMMENTS:          
      return Object.assign({}, state,
        state
        )
    default:
      return state
	}
}


