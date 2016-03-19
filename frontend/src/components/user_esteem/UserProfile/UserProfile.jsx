import UserProfilePicture from './UserProfilePicture.jsx'
import UserProfileStats from './UserProfileStats.jsx'

const UserProfile = (props) => {
    const {user} = props;
    return (
        <div>
            <UserProfilePicture profilePicture={user.profilePicture}/>
            <UserProfileStats esteemCount="34" averageEsteem="23" lastChange="12/23" />
        </div>
    );
}

export default UserProfile;
