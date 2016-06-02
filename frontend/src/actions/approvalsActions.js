export const REQUESTING_APPRAISEE_APPROVAL = 'REQUESTING_APPRAISEE_APPROVAL';
export function requestingAppraiseeApproval(appraiseeId) {
  return {
    type: REQUESTING_APPRAISEE_APPROVAL,
    appraiseeId,
  };
}

export const SUCCESSFULLY_APPROVED_APPRAISEE = 'SUCCESSFULLY_APPROVED_APPRAISEE';
export function successfullyApprovedAppraisee() {
  return {
    type: SUCCESSFULLY_APPROVED_APPRAISEE,
  };
}

export function requestAppraiseeApproval(appraiseeId) {
  return (dispatch) => {
    dispatch(requestingAppraiseeApproval(appraiseeId));
    fetch(`http://localhost:3000/approvals/${appraiseeId}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    .then((res) => res.json())
    .then((json) => {
      dispatch(successfullyApprovedAppraisee());
    });
  };
}

