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
        <div>
            {LeaderBoardContent}
        </div>
    );
}

export default LeaderBoard;