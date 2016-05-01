/**
 * Can calculate, and display stats about leaderboard
 * @param  {[array]} leaderboard [A list of the appraisees]
 */
const UserProfileStats = (props) => {
    const { profile } = props
    const { appraisees } = profile
    const ratings = appraisees.map((a)=>a.esteem)
                                .reduce((oldval,newval)=> oldval + newval, 0);
    const averageEsteem = Math.round((ratings / appraisees.length) * 100) / 100

    function displayUserProfileStats(){
        if (props.profile.ui.isFetchingProfile) {
            return (
                <div>   
                    <i className="fa fa-spin fa-spinner fa-2x"></i>
                </div>
            )
        } else {
            return (
                <div>
                    <p>L'estime de {profile.name}</p>
                    <p>Personnes dans son estime : { appraisees.length }</p>
                    <p>Estime Moyenne : {averageEsteem}</p>
                    {/*<p>Dernier changement : {props.lastChange}</p>*/}
                </div>
            )
        }
    }
    return displayUserProfileStats();
}


export default UserProfileStats;