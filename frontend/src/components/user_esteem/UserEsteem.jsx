import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import { connect } from 'react-redux';


const UserEsteem = (props) => {
    return (
        <div>
            {props.route.foobar}
            <UserProfile />
            <hr/>
            <LeaderBoard />
        </div>
    )
};


export default connect(state => ({ cards: state.cards }))(UserEsteem);