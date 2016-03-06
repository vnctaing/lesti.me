export const RECEIVED_USER_PROFILE = 'RECEIVED_USER_PROFILE';
export function receivedUserProfile (json) {
    return {
        type: RECEIVED_USER_PROFILE,
        user: json.user
    }
}


export const REQUESTING_USER_PROFILE = 'REQUESTING_USER_PROFILE';
export function requestingUserProfile () {
  return {
    type: REQUESTING_USER_PROFILE,
  }
}

/**
 * Thunk action creator, in order to be able to do async actions
 * Redux-thunk middleware let us use action creator that returns a function instead
 * of a plain object. Therefore, the returned function can delay the action dispatches
 * @return {[fn]} [Promise]
 */
export function fetchUserProfile() {
  return function (dispatch) {
    dispatch(requestingUserProfile());
    return fetch(`http://localhost:3000/user`)
              .then(response => response.json())
              .then(json => dispatch(receivedUserProfile(json)))
              .catch(e => console.log('error', e));
  }
}
