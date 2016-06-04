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

export const CANCELING_APPRAISEE_APPROVAL = 'CANCELING_APPRAISEE_APPROVAL';
export function cancelingAppraiseeApproval(appraiseeId) {
  return {
    type: CANCELING_APPRAISEE_APPROVAL,
    appraiseeId
  };
}

export function requestAppraiseeApproval(appraiseeId, opts) {
  return (dispatch) => {
    const appraiseeApprovals = JSON.parse(localStorage.getItem('approvals')) || {};

    if (appraiseeApprovals[appraiseeId] !== 'approved') {
      dispatch(requestingAppraiseeApproval(appraiseeId));
      appraiseeApprovals[appraiseeId] = 'approved';
    }

    if (opts && opts.purpose === 'cancelApproval') {
      dispatch(cancelingAppraiseeApproval(appraiseeId));
      delete appraiseeApprovals[appraiseeId];
    }

    fetch(`http://localhost:3000/approvals/${appraiseeId}`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ opts }),
    })
    .then((res) => res.json())
    .then((json) => {
      if (json.status === 200) {
        localStorage.setItem('approvals', JSON.stringify(appraiseeApprovals));
      }
    })
    .catch((e) => console.log('ERROR', e));
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

