import * as actions from '../actions/action.js';
import * as commentActions from '../actions/commentActions.js';

import { fromJS } from 'immutable';
import _ from 'lodash';
const initialState = {
  name: '',
  profilePicture: '',
  appraisees: [],
  comments: {},
  ui: {
    show_update_appraisee_esteem_modal: {},
    isFetchingProfile: false,
    appraiseePanel: {},
    loadingComments: {},
  },
};


/**
 * Helper to create an immutable Map
 * @param  {[array]} arr          [description]
 * @param  {anything} initialValue [description]
 * @return {Immutable Map}  {arr[0] : initialValue, arr[1] : initialValue}
 */
function initMapFromArray(arr, initialValue) {
  const obj = {};
  _.each(arr.map((a) => a._id),
    (id) => { obj[id] = initialValue; });
  return fromJS(obj);
}


export default function profile(state = initialState, action) {
  const iState = fromJS(state);

  switch (action.type) {
    case actions.REQUESTING_APPRAISER_PROFILE:
      return iState.setIn(['ui', 'isFetchingProfile'], true)
                   .toJS();
    case actions.RECEIVED_APPRAISER_PROFILE:
      return iState.mergeDeep(action.profile)
                   .setIn(['comments'],
                            initMapFromArray(action.profile.appraisees, []))
                   .setIn(['ui', 'show_update_appraisee_esteem_modal'],
                            initMapFromArray(action.profile.appraisees, false))
                   .setIn(['ui', 'appraiseePanel'],
                            initMapFromArray(action.profile.appraisees, 'estimation'))
                   .setIn(['ui', 'loadingComments'],
                            initMapFromArray(action.profile.appraisees, false))
                   .setIn(['ui', 'isFetchingProfile'], false)
                   .toJS();
    case actions.OPEN_APPRAISEE_UPDATE_MODAL:
      return iState.setIn(['ui', 'show_update_appraisee_esteem_modal', action.appraiseeId], true)
                   .toJS();
    case actions.CLOSE_APPRAISEE_UPDATE_MODAL:
      return iState.setIn(['ui', 'show_update_appraisee_esteem_modal', action.appraiseeId], false)
                   .toJS();
    case actions.REQUESTING_APPRAISEE_COMMENTS:
      return iState.setIn(['ui', 'loadingComments', action.appraiseeId], true)
                   .toJS();
    case commentActions.ADDING_COMMENT:
      console.log('heeeyyy i am fired');
      return iState.updateIn(['comments', action.appraiseeId],
                      list => list.push(fromJS(action.comment)))
                   .toJS();
    case actions.RECEIVED_APPRAISEE_COMMENTS:
      return iState
                   .setIn(['comments', action.appraiseeId], action.comments)
                   .setIn(['ui', 'loadingComments', action.appraiseeId], false)
                   .setIn(['ui', 'appraiseePanel', action.appraiseeId], 'comments')
                   .toJS();
    case actions.SHOW_ESTIMATION_SECTION:
      return iState.setIn(['ui', 'appraiseePanel', action.appraiseeId], 'estimation')
                   .toJS();
    // case actions.REQUESTING_COMMENTS:
    // case actions.RECEIVED_COMMENTS:
    default:
      return state;
  }
}
