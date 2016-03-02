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


export function fetchUserProfile() {
  return function (dispatch) {
    dispatch(requestingUserProfile());
    return fetch(`http://localhost:3000/user`)
              .then(response => response.json())
              .then(json => dispatch(receivedUserProfile(json)))
              .catch(console.log('hi'));
  }
}
