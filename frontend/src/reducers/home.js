import * as betaActions from '../actions/betaActions.js';
import * as actions from '../actions/action.js';
import { fromJS } from 'immutable';

const initialState = {
  betaToken: null,
  ui: {
    showSignUpForm: false,
    isBetaTokenInValid: false,
  },
};


export default function home(state = initialState, action) {
  const iState = fromJS(state);
  switch (action.type) {
    case betaActions.CONSUMING_TOKEN:
      return iState.setIn(['ui', 'showSignUpForm'], false)
                   .toJS();
    case betaActions.FAILED_AUTHENTICATED_BETA_TOKEN:
      return iState.setIn(['ui', 'isBetaTokenInValid'], true)
                   .toJS();
    case betaActions.AUTHENTICATED_BETA_TOKEN:
      return iState.set('betaToken', action.betaToken.betaToken)
                   .setIn(['ui', 'showSignUpForm'], true)
                   .setIn(['ui', 'isBetaTokenInValid'], false)
                   .toJS();
    default:
      return state;
  }
}
