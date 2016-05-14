import LeaderBoardRow from './LeaderBoardRow.jsx';

/**
 * LeaderBoard component
 * @param  {[Object]} props contains :
 * {[array]} leaderboard array
 */
const LeaderBoard = (props) => {
  const { profile, commentActions, actions, initialize, ui, isLoggedIn } = props;
  return (
    <div>
      <div className="leaderboard">
        {
          profile.appraisees.map((a) => {
            return (
              <LeaderBoardRow
                appraisee={a}
                key={a._id}
                isLoggedIn={isLoggedIn}
                comments={profile.comments[a._id]}
                appraiserName={profile.name}
                commentActions={commentActions}
                actions={actions}
                initialize={initialize}
                ui={ui}
                panel="estimation"
              />
              );
          })
        }
      </div>
    </div>
  );
};

export default LeaderBoard;
