import LeaderBoardComments from './LeaderBoardComments.jsx';
import LeaderBoardEstimation from './LeaderBoardEstimation.jsx';

const LeaderBoardRow = (props) => {
  const { appraisee } = props;

  function renderRow() {
    if (props.ui.appraiseePanel[appraisee._id] === 'comments') {
      return (
        <LeaderBoardComments
          appraisee={props.appraisee}
          actions={props.actions}
          commentActions={props.commentActions}
          comments={props.comments}
        />);
    } else if (props.ui.appraiseePanel[appraisee._id] === 'estimation') {
      return (
        <LeaderBoardEstimation
          appraisee={props.appraisee}
          actions={props.actions}
          ui={props.ui}
        />
      );
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
