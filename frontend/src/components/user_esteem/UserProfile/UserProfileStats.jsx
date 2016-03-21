/**
 * Can calculate, and display stats about leaderboard
 * @param  {[array]} leaderboard [A list of the appraisees]
 */
const UserProfileStats = (props) => {
    const {leaderboard} = props;
    const ratings = leaderboard.map((a)=>a.esteem)
                                .reduce((oldval,newval)=> oldval + newval, 0);
    const averageEsteem = ratings / leaderboard.length;
    
    return (
        <div>
            <p>Personne dans lestime : {leaderboard.length}</p>
            <p>Estime Moyenne : {averageEsteem}</p>
            <p>Dernier changement : {props.lastChange}</p>
        </div>
    );
}


export default UserProfileStats;