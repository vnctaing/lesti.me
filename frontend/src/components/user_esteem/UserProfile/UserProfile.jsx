import UserProfilePicture from './UserProfilePicture.jsx'
import UserProfileStats from './UserProfileStats.jsx'

const UserProfile = (props) => {
    return (
        <div>
            {props.name}
            <UserProfilePicture profilePicture="http://i.skyrock.net/2788/84772788/pics/3207102241_1_2_S1ql29fn.jpg" />
            <UserProfileStats esteemCount="34" averageEsteem="23" lastChange="12/23" />
        </div>
    );
}

export default UserProfile;
