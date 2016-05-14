import LeaderBoardComments from './LeaderBoardComments.jsx';
import LeaderBoardEstimation from './LeaderBoardEstimation.jsx';

const LeaderBoardRow = (props) => {
  const { appraisee, isLoggedIn, actions, commentActions, comments, ui } = props;

  function renderRow() {
    if (props.ui.appraiseePanel[appraisee._id] === 'comments') {
      return (
        <LeaderBoardComments
          appraisee={appraisee}
          actions={actions}
          commentActions={commentActions}
          comments={comments}
        />);
    } else if (props.ui.appraiseePanel[appraisee._id] === 'estimation') {
      return (
        <LeaderBoardEstimation
          appraisee={appraisee}
          actions={actions}
          ui={ui}
          isLoggedIn={isLoggedIn}
      />);
    }
  }

  return (
    <div>
      <div className="leaderboard_row">
        {renderRow()}
      </div>
    </div>
  );
};

export default LeaderBoardRow;
