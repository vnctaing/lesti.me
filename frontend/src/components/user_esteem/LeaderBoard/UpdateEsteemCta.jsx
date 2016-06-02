const UpdateEsteemCta = (props) => {
  const { isItsPage, approvalsActions, appraisee } = props;

  function reEstimatinUp() {
    props.onUpdateEsteemClick('increasing');
  }

  function reEstimatingDown() {
    props.onUpdateEsteemClick('decreasing');
  }

  function approve() {
    console.log('appraisee._id', appraisee._id);
    approvalsActions.requestAppraiseeApproval(appraisee._id);
  }

  function disapprove() {
    console.log('disapproving')
  }

  function reEstimateOrThumbs() {
    if (isItsPage) {
      return (
        <div className="leaderboard__ctaContainer">
          <div className="leaderboard__cta inline leaderboard__cta--green" onClick={reEstimatinUp}>
            <i className="fa fa-arrow-up inline"></i>
          </div>
          <div className="leaderboard__cta inline leaderboard__cta--red" onClick={reEstimatingDown}>
            <i className="fa fa-arrow-down inline"></i>
          </div>
        </div>
      );
    }
    return (
      <div className="leaderboard__ctaContainer">
        <div className="leaderboard__cta inline leaderboad__greyCtaHover--green" onClick={approve}>
          <i className="fa fa-thumbs-up inline"></i>
        </div>
        <div className="leaderboard__cta inline leaderboad__greyCtaHover--red" onClick={disapprove}>
          <i className="fa fa-thumbs-down inline"></i>
        </div>
      </div>
    );
  }

  return (
    <div>
      {reEstimateOrThumbs()}
    </div>
  );
};

export default UpdateEsteemCta;
