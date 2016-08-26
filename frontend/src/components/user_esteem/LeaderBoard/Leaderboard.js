import LeaderBoardRow from './LeaderBoardRow';

/**
 * LeaderBoard component
 * @param  {[Object]} props contains :
 * {[array]} leaderboard array
 */
const LeaderBoard = (props) => {
  const { profile, commentActions, actions, initialize, ui, isItsPage } = props;
  return (
    <div>
        {
          profile.appraisees.length
          ? profile.appraisees.map((a) => {
            return (
              <LeaderBoardRow
                appraisee={a}
                key={a._id}
                isItsPage={isItsPage}
                comments={profile.comments[a._id]}
                appraiserName={profile.name}
                approvedAppraisees={profile.approvedAppraisees}
                commentActions={commentActions}
                approvalsActions={props.approvalsActions}
                actions={actions}
                initialize={initialize}
                ui={ui}
                panel="estimation"
              />
              );
          })
          : <p>L'estime de {profile.name} est vide pour le moment</p>
        }
    </div>
  );
};

export default LeaderBoard;
