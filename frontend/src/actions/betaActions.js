export const VERIFYING_BETA_ACCESS_TOKEN = 'VERIFYING_BETA_ACCESS_TOKEN';
export function verifyingBetaAccessToken() {
  return {
    type: VERIFYING_BETA_ACCESS_TOKEN,
  };
}

export const AUTHENTICATED_BETA_TOKEN = 'AUTHENTICATED_BETA_TOKEN';
export function authenticatedBetaAccess(betaToken) {
  return {
    type: AUTHENTICATED_BETA_TOKEN,
    betaToken,
  };
}

export const FAILED_AUTHENTICATED_BETA_TOKEN = 'FAILED_AUTHENTICATED_BETA_TOKEN';
export function failedAuthenticatedBetaToken() {
  return {
    type: FAILED_AUTHENTICATED_BETA_TOKEN,
  };
}

export function verifyBetaAccessToken(betaToken) {
  return (dispatch) => {
    dispatch(verifyingBetaAccessToken());
    fetch(`http://localhost:3000/betatoken/${betaToken}`)
      .then((r) => r.json())
      .then((json) => {
        json.status === 200
          ? dispatch(authenticatedBetaAccess(json.betaToken))
          : dispatch(failedAuthenticatedBetaToken());
      });
  };
}

export const CREATING_TOKEN = 'CREATING_TOKEN';
export function creatingToken() {
  return {
    type: CREATING_TOKEN,
  };
}

export function createToken() {
  return (dispatch) => {
    dispatch(creatingToken());
    fetch('http://localhost:3000/betatoken/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: '{}',
    })
    .then((r) => r.json())
    .then((json) => console.log(json));
  };
}

export const CONSUMING_TOKEN = 'CONSUMING_TOKEN';
export function consumingToken(betaToken) {
  return {
    type: CONSUMING_TOKEN,
    betaToken,
  };
}

export function consumeToken(betaToken) {
  return (dispatch) => {
    dispatch(consumingToken(betaToken));
    fetch(`http://localhost:3000/betatoken/${betaToken}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((r) => r.json())
    .then((json) => console.log(json));
  };
}


