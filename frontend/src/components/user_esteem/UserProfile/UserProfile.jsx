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
        <div>
            <p>{user.name}'s profile</p>
            <UserProfilePicture profilePicture={user.profilePicture}/>
            <UserProfileStats leaderboard={leaderboard} />
        </div>
    );
}

export default UserProfile;
