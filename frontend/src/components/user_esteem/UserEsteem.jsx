import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action.js';
import { bindActionCreators } from 'redux';



function mapStateToProps(state){
    return {
        esteemApp: state.esteemApp
    }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}





/**
 * UserEsteem - Component connected to the Redux Store
 * Container of the Leaderboard and the UserProfile, used on the `/de/[username]`
 * @param  {[Object]} props contains:
 * {[Object]} esteemApp
 */
const UserEsteem = (props) => {
    const { user } = props.esteemApp;
    // props.actions.fetchUserProfile();
    return (
        <div>
            {props.route.foobar}
            <UserProfile user={user} />
            <LeaderBoard leaderboard={user.leaderboard}/>
            <hr/>
        </div>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(UserEsteem);