const UpdateEsteemCta = (props) => {
  const { isItsPage } = props;

  function _onClick() {
    props.onUpdateEsteemClick();
  }

  function reEstimateOrThumbs() {
    if (isItsPage) {
      return (
        <div className="leaderboard__ctaContainer">
          <div className="leaderboard__cta inline leaderboard__cta--green" onClick={_onClick}>
            <i className="fa fa-arrow-up inline"></i>
          </div>
          <div className="leaderboard__cta inline leaderboard__cta--red" onClick={_onClick}>
            <i className="fa fa-arrow-down inline"></i>
          </div>
        </div>
      );
    }
    return (
      <div className="leaderboard__ctaContainer">
        <div className="leaderboard__cta inline leaderboard__cta--green" onClick={_onClick}>
          <i className="fa fa-thumbs-up inline"></i>
        </div>
        <div className="leaderboard__cta inline leaderboard__cta--red" onClick={_onClick}>
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
