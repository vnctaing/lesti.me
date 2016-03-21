export const RECEIVED_USER_PROFILE = 'RECEIVED_USER_PROFILE';
export function receivedUserProfile (json) {
    return {
        type: RECEIVED_USER_PROFILE,
        user: json.user
    }
}

/**
 * Action creator fired just before fetching data for a user profile
 * @type {Function}
 */
export const REQUESTING_USER_PROFILE = 'REQUESTING_USER_PROFILE';
export function requestingUserProfile () {
  return {
    type: REQUESTING_USER_PROFILE,
  }
}

/**
 * Thunk action creator, in order to be able to do async actions.
 * The redux-thunk middleware let us have access the `dispatch` fn
 * Redux-thunk middleware let us use action creator that returns a function instead
 * of a plain object. Therefore, the returned function can delay the dispatched action 
 * @return {[fn]} [Promise]
 */
export function fetchUserProfile(username) {
  return function (dispatch) {
    dispatch(requestingUserProfile());
    return fetch(`http://localhost:3000/user`)
              .then(response => response.json())
              .then(json => dispatch(receivedUserProfile(json)))
              .catch(e => console.log('error', e));
  }
}
