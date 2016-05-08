import * as actions from '../actions/action.js';

const initialState = {
  ui: {
    failedSignIn: false,
  },
};


export default function signInPage(state = initialState, action) {
  switch (action.type) {
    case actions.FAILED_SIGN_IN:
      return Object.assign(
        {},
        state,
        {
          sign_page: {
            ui: {
              failedSignIn: true,
            },
          },
        }
      );
    case actions.SUCCESSFULLY_SIGN_IN:
      return Object.assign(
        {},
        state,
        {
          sign_page: {
            ui: {
              failedSignIn: false,
            },
          },
        }
      );
    default:
      return state;
  }
}
