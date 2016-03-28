import LeaderBoardRow from './LeaderBoardRow.jsx';


/**
 * LeaderBoard component 
 * @param  {[Object]} props contains :
 * {[array]} leaderboard array
 */
const LeaderBoard = (props) => {
    const { leaderboard } = props;
    const LeaderBoardContent = leaderboard.map((a) => <LeaderBoardRow appraisee={a} key={a.id} /> )
    return (
        <div className="container">
            <div className="leaderboard">
                {LeaderBoardContent}
            </div>
        </div>
    );
}

export default LeaderBoard;