import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import { connect } from 'react-redux';


const UserEsteem = (props) => {
    const { user } = props.esteemApp;
    return (
        <div>
            {props.route.foobar}
            <UserProfile user={user} />
            <LeaderBoard leaderboard={user.leaderboard}/>
            <hr/>
        </div>
    )
};



export default connect(state => ({ esteemApp: state.esteemApp }))(UserEsteem);