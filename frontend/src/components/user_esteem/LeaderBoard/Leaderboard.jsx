import LeaderBoardRow from './LeaderBoardRow.jsx';

/**
 * LeaderBoard component 
 * @param  {[Object]} props contains :
 * {[array]} leaderboard array
 */
const LeaderBoard = (props) => {
    const { appraiser, actions, initialize } = props;
    const { appraisees } = appraiser;
    const LeaderBoardContent = appraisees.map((a) => {
        return <LeaderBoardRow appraisee={a} 
                        appraiser_name={appraiser.name}
                        key={a._id}
                        panel='comments'
                        actions={actions} 
                        initialize={initialize}
                        user_esteem={props.user_esteem}/>
    })
    return (
        <div>
            <div className="leaderboard">
                {LeaderBoardContent}
            </div>
        </div>
    );
}

export default LeaderBoard;