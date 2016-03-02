import UserProfilePicture from './UserProfilePicture.jsx'
import UserProfileStats from './UserProfileStats.jsx'

const UserProfile = (props) => {
    return (
        <div>
            {props.name}
            <UserProfilePicture />
            <UserProfileStats esteemCount="34" averageEsteem="23" lastChange="12/23" />
        </div>
    );
}

export default UserProfile;