const UpdateEsteemCta = (props) => {
  function _onClick() {
    props.onUpdateEsteemClick();
  }

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
};

export default UpdateEsteemCta;
