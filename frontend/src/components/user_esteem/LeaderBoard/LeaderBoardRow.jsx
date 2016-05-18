import LeaderBoardComments from './LeaderBoardComments.jsx';
import LeaderBoardEstimation from './LeaderBoardEstimation.jsx';
// import LeaderboardEdit from './LeaderboardEdit.jsx';

const LeaderBoardRow = (props) => {
  const { appraisee, isItsPage, actions, commentActions, comments, ui } = props;

  function renderRow() {
    if (props.ui.appraiseePanel[appraisee._id] === 'comments') {
      return (
        <LeaderBoardComments
          appraisee={appraisee}
          actions={actions}
          commentActions={commentActions}
          comments={comments}
        />);
    } 
    // else if (props.ui.appraiseePanel[appraisee._id] === 'edit') {
    //   return (
    //     <LeaderboardEdit
    //       appraisee={appraisee}
    //       actions={actions}
    //     />
    //   );
    // }
    return (
      <LeaderBoardEstimation
        appraisee={appraisee}
        actions={actions}
        ui={ui}
        isItsPage={isItsPage}
      />
    );
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
