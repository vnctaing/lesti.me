import SHA256 from 'js-sha256';
import { push } from 'react-router-redux';

export const APPRAISER_PROFILE_NOT_FOUND = 'APPRAISER_PROFILE_NOT_FOUND';
export function appraiserProfileNotFound() {
  return (dispatch) => {
    dispatch(push('/foo'));
    return {
      type: APPRAISER_PROFILE_NOT_FOUND,
    };
  };
}


export const RECEIVED_APPRAISER_PROFILE = 'RECEIVED_APPRAISER_PROFILE';
export function receivedAppraiserProfile(profile) {
  return {
    type: RECEIVED_APPRAISER_PROFILE,
    profile,
  };
}

/**
 * Action creator fired just before fetching data for a user profile
 * @type {Function}
 */
export const REQUESTING_APPRAISER_PROFILE = 'REQUESTING_APPRAISER_PROFILE';
export function requestingAppraiserProfile() {
  return {
    type: REQUESTING_APPRAISER_PROFILE,
  };
}

/**
 * Thunk action creator, in order to be able to do async actions.
 * The redux-thunk middleware let us have access the `dispatch` fn
 * Redux-thunk middleware let us use action creator that returns a function instead
 * of a plain object. Therefore, the returned function can delay the dispatched action
 * @return {[fn]} [Promise]
 */
export function fetchUserProfile(appraiser) {
  return (dispatch) => {
    dispatch(requestingAppraiserProfile());
    fetch(`http://localhost:3000/appraiser/${appraiser}`)
      .then((response) => response.json())
      .then((json) => {
        json.status === 200
          ? dispatch(receivedAppraiserProfile(json.appraiser))
          : dispatch(push('/appraiser_not_found'));
      })
      .catch(e => console.log('error', e));
  };
}


const ADDING_APPRAISEE = 'ADDING_APPRAISEE';
export function addingAppraisee() {
  return {
    type: ADDING_APPRAISEE,
  };
}

export function postingNewAppraisee(formData) {
  return (dispatch) => {
    dispatch(addingAppraisee());
    return fetch('http://localhost:3000/appraisee', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appraiseeName: formData.appraiseeName,
        esteem: formData.esteem,
        description: formData.description,
        list: formData.list,
        appraiser: formData.appraiser,
        sessionToken: formData.sessionToken,
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log('json', json))
    .catch((e) => console.log('error', e));
  };
}

const REQUESTING_SIGN_UP = 'REQUESTING_SIGN_UP';
export function requestingSignUp() {
  return {
    type: REQUESTING_SIGN_UP,
  };
}

const SUCCESSFULLY_SIGN_UP = 'SUCCESSFULLY_SIGN_UP';
export function successfullySignUp() {
  return {
    type: SUCCESSFULLY_SIGN_UP,
  };
}

const FAILED_SIGN_UP = 'FAILED_SIGN_UP';
export function failedSignUp() {
  return {
    type: FAILED_SIGN_UP,
  };
}

const REQUESTING_SIGN_IN = 'REQUESTING_SIGN_IN';
export function requestingSignIn() {
  return {
    type: REQUESTING_SIGN_IN,
  };
}


export function signingUp(formData) {
  return (dispatch) => {
    dispatch(requestingSignIn());
    fetch('http://localhost:3000/appraiser', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.username,
        password: SHA256(formData.password),
        email: formData.email,
      }),
    })
    .then((response) => response.json())
    .then((json) => {
      if (json.status === 200) {
        dispatch(successfullySignUp());
        dispatch(push(`de/${json.appraiserName}`));
      } else {
        dispatch(failedSignUp());
      }
    })
    .catch((e) => console.log('error', e));
  };
}


export const SUCCESSFULLY_SIGN_IN = 'SUCCESSFULLY_SIGN_IN';
export function successfullySignIn(token) {
  return {
    type: SUCCESSFULLY_SIGN_IN,
    token,
  };
}

export const FAILED_SIGN_IN = 'FAILED_SIGN_IN';
export function failedSignIn() {
  return {
    type: FAILED_SIGN_IN,
  };
}

export function signingIn(formData) {
  return (dispatch) => {
    dispatch(requestingSignUp());
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.username,
        password: SHA256(formData.password),
      }),
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 200) {
        const { appraiser } = json;
        const token = {};
        token[appraiser._id] = appraiser.sessionToken;
        localStorage.setItem('sessionToken', JSON.stringify(token));
        dispatch(successfullySignIn(token));
        dispatch(push(`de/${appraiser.name}`));
      } else {
        dispatch(failedSignIn());
      }
    })
    .catch(e => console.log('error', e));
  };
}


export const DISCONNECTING_USER = 'DISCONNECTING_USER';
export function disconnectingUser() {
  return {
    type: DISCONNECTING_USER,
  };
}

export function disconnectUser() {
  return (dispatch) => {
    dispatch(disconnectingUser());
    localStorage.removeItem('sessionToken');
  };
}

export const OPEN_APPRAISEE_UPDATE_MODAL = 'OPEN_APPRAISEE_UPDATE_MODAL';
export function openAppraiseeUpdateModal(appraiseeId) {
  return {
    type: OPEN_APPRAISEE_UPDATE_MODAL,
    appraiseeId,
  };
}

export const CLOSE_APPRAISEE_UPDATE_MODAL = 'CLOSE_APPRAISEE_UPDATE_MODAL';
export function closeAppraiseeUpdateModal(appraiseeId) {
  return {
    type: CLOSE_APPRAISEE_UPDATE_MODAL,
    appraiseeId,
  };
}

export const UPDATING_APPRAISEE_ESTEEM = 'UPDATING_APPRAISEE_ESTEEM';
export function updatingAppraiseeEsteem(hey) {
  const appraisee = 'fuck';
  return function (dispatch) {
    fetch(`http://localhost:3000/appraisee/${appraisee}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'foo': 'bar'
        })
    })
  }
}

export const REQUESTING_APPRAISEE_COMMENTS = 'REQUESTING_APPRAISEE_COMMENTS';
export function requestingAppraiseeComments(appraiseeId) {
  return {
    type: REQUESTING_APPRAISEE_COMMENTS,
    appraiseeId,
  };
}

export const RECEIVED_APPRAISEE_COMMENTS = 'RECEIVED_APPRAISEE_COMMENTS';
export function receivedAppraiseeComments(appraiseeId, comments) {
  return {
    type: RECEIVED_APPRAISEE_COMMENTS,
    appraiseeId,
    comments,
  };
}

export const FAILED_TO_REQUEST_APPRAISEE_COMMENTS = 'FAILED_TO_REQUEST_APPRAISEE_COMMENTS';
export function failedToRequestAppraiseeComments() {
  return {
    type: FAILED_TO_REQUEST_APPRAISEE_COMMENTS,
  };
}

export const SHOW_COMMENT_SECTION = 'SHOW_COMMENT_SECTION';
export function showCommentSection(appraiseeId) {
  return (dispatch) => {
    dispatch(requestingAppraiseeComments(appraiseeId));
    fetch(`http://localhost:3000/comments/${appraiseeId}`)
      .then((resp) => resp.json())
      .then((json) => {
        json.status === 200
          ? dispatch(receivedAppraiseeComments(appraiseeId, json.comments))
          : dispatch(failedToRequestAppraiseeComments());
      });
  };
}


export const SUCCESSFULLY_AUTHENTICATED_USER = 'SUCCESSFULLY_AUTHENTICATED_USER';
export function successfullyAuthenticatedUser(token) {
  return {
    type: SUCCESSFULLY_AUTHENTICATED_USER,
    token
  };
}

export const FAILED_AUTHENTICATED_USER = 'FAILED_AUTHENTICATED_USER';
export function failedAuthenticatedUser() {
  return {
    type: FAILED_AUTHENTICATED_USER,
  };
}

export function checkUserAuth() {
  return (dispatch) => {
    const token = localStorage.getItem('sessionToken');
    fetch('http://localhost:3000/auth/token', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    })
    .then((resp) => resp.json())
    .then((json) => {
      json.status === 200
        ? dispatch(successfullyAuthenticatedUser(JSON.parse(token)))
        : dispatch(failedAuthenticatedUser());
    });
  };
}

export const SHOW_ESTIMATION_SECTION = 'SHOW_ESTIMATION_SECTION';
export function showEstimationSection(appraiseeId) {
  return {
    type: SHOW_ESTIMATION_SECTION,
    appraiseeId,
  };
}
