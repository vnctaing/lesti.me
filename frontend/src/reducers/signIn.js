import * as actions from '../actions/action.js';
import { fromJS } from 'immutable';

const initialState = {
  loggedInUser: {},
  isLoggedIn: false,
  sessionToken: {},
  ui: {
    failedSignIn: false,
  },
};


export default function signIn(state = initialState, action) {
  const iState = fromJS(state);

  switch (action.type) {
    case actions.FAILED_SIGN_IN:
      return Object.assign(
        {},
        state,
        {
          ui: {
            failedSignIn: true,
          },
        }
      );
    case actions.SUCCESSFULLY_SIGN_IN:
      return iState.set('isLoggedIn', true)
                   .set('sessionToken', action.token)
                   .setIn(['ui', 'failedSignIn'], false)
                   .toJS();
    case actions.SUCCESSFULLY_AUTHENTICATED_USER:
      return iState.set('sessionToken', action.token)
                   .toJS();
    default:
      return state;
  }
}
