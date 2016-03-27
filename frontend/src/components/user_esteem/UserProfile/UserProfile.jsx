import UserProfilePicture from './UserProfilePicture.jsx'
import UserProfileStats from './UserProfileStats.jsx'


/**
 * UserProfile Component - The component that contains
 * every informations relative to the /de/User (profile 
 * picture, stats ...)
 * @param  {[Object]} props
 */
const UserProfile = (props) => {
    const {user} = props;
    const {leaderboard} = user;
    return (
        <div className="profile container container-flex--hcenter">
            <UserProfilePicture profilePicture={user.profilePicture}/>
            <UserProfileStats user={user} leaderboard={leaderboard} />
        </div>
    );
}

export default UserProfile;
