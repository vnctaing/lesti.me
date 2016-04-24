import LeaderBoardRow from './LeaderBoardRow.jsx';

/**
 * LeaderBoard component 
 * @param  {[Object]} props contains :
 * {[array]} leaderboard array
 */
const LeaderBoard = (props) => {
    const { appraisees, actions } = props;
    const LeaderBoardContent = appraisees
    								.map((a) => <LeaderBoardRow appraisee={a} key={a.id} actions={actions} user_esteem={props.user_esteem}/> )
    return (
        <div>
            <div className="leaderboard">
                {LeaderBoardContent}
            </div>
        </div>
    );
}

export default LeaderBoard;