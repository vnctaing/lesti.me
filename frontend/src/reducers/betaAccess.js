import * as betaActions from '../actions/betaActions.js';
import { fromJS } from 'immutable';

const initialState = {
  newBetaToken: null,
};


export default function betaAccess(state = initialState, action) {
  const iState = fromJS(state);
  switch (action.type) {
    case betaActions.CREATED_TOKEN:
      return iState.setIn(['newBetaToken'], action.newBetaToken)
                   .toJS();
    default:
      return state;
  }
}
