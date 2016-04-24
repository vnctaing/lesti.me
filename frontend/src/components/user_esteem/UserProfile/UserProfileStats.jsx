/**
 * Can calculate, and display stats about leaderboard
 * @param  {[array]} leaderboard [A list of the appraisees]
 */
const UserProfileStats = (props) => {
    const {appraisees} = props;
    const {appraiser} = props;
    const ratings = appraisees.map((a)=>a.esteem)
                                .reduce((oldval,newval)=> oldval + newval, 0);
    const averageEsteem = ratings / appraisees.length;
    
    return (
        <div>
            <p>L'estime de {appraiser.name}</p>
            <p>Personnes dans son estime : {appraisees.length}</p>
            <p>Estime Moyenne : {averageEsteem}</p>
            <p>Dernier changement : {props.lastChange}</p>
        </div>
    );
}


export default UserProfileStats;