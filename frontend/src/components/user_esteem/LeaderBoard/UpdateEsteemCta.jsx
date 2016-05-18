const UpdateEsteemCta = (props) => {
  const { isItsPage } = props;

  function reEstimatingDown() {
    props.onUpdateEsteemClick();
  }

  function reEstimatinUp() {
    console.log('reestimatingup')
  }

  function approve() {
    console.log('approving')
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
        <div className="leaderboard__cta inline leaderboard__cta--green" onClick={approve}>
          <i className="fa fa-thumbs-up inline"></i>
        </div>
        <div className="leaderboard__cta inline leaderboard__cta--red" onClick={disapprove}>
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
