export const ADDING_COMMENT = 'ADDING_COMMENT';
export function addingComment() {
  return {
    type: ADDING_COMMENT
  }
}

export function postingComment(formData) {
  return function(dispatch){
    dispatch(addingComment());
    return fetch(`http://localhost:3000/comment`,{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: formData.author,
          content: formData.content,
          _appraisee: formData._appraisee,
        })
      })
    .then(response=> response.json())
    .then(json=> console.log('json', json))
    .catch(e=> console.log('error',e));
  }
}

export const REQUESTING_COMMENTS = 'REQUESTING_COMMENTS'
export function requestingComments(appraiseeId) {
  return {
    type: REQUESTING_COMMENTS,
    appraiseeId
  }
}
export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS'
export function receivedComments(appraiseeId) {
  return {
    type: RECEIVED_COMMENTS,
    appraiseeId
  }
}

