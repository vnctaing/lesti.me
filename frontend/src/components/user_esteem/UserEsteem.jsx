import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';

const UserEsteem = (props) => {
    return (
        <div>
            <UserProfile />
            <hr/>
            <LeaderBoard />
        </div>
    )
};

export default UserEsteem;