export const ADDING_COMMENT = 'ADDING_COMMENT';
export function addingComment(appraiseeId, comment) {
  return {
    type: ADDING_COMMENT,
    comment,
    appraiseeId,
  };
}

export function postingComment(formData) {
  return (dispatch) => {
    return fetch('http://localhost:3000/comment', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: formData.author,
        content: formData.content,
        _appraisee: formData._appraisee,
      }),
    })
    .then((response) => response.json())
    .then((json) => {
      dispatch(addingComment(formData._appraisee, json.comment));
    })
    .catch((e) => console.log('error', e));
  };
}

export const REQUESTING_COMMENTS = 'REQUESTING_COMMENTS';
export function requestingComments(appraiseeId) {
  return {
    type: REQUESTING_COMMENTS,
    appraiseeId,
  };
}

export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS';
export function receivedComments(appraiseeId) {
  return {
    type: RECEIVED_COMMENTS,
    appraiseeId,
  };
}

