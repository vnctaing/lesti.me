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
    const appraiseeApprovals = JSON.parse(localStorage.getItem('approvals')) || {};
    if (appraiseeApprovals[appraiseeId] !== 'approved') {
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
        if (json.status === 200) {
          appraiseeApprovals[appraiseeId] = 'approved';
          localStorage.setItem('approvals', JSON.stringify(appraiseeApprovals));
          dispatch(successfullyApprovedAppraisee());
        }
      });
    }
    return false;
  };
}

export const CHECKING_VISITOR_APPROVALS = 'CHECKING_VISITOR_APPROVALS';
export function checkingVisitorApprovals(approvals) {
  return {
    type: CHECKING_VISITOR_APPROVALS,
    approvals,
  };
}

export function checkVisitorApprovals() {
  return (dispatch) => {
    const approvals = JSON.parse(localStorage.getItem('approvals'));
    dispatch(checkingVisitorApprovals(approvals));
  };
}

