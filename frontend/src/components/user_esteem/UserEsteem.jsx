import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import {initialize} from 'redux-form';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action.js';
import * as commentActions from '../../actions/commentActions.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'


function mapStateToProps(state){
    return {
        profile: state.esteemApp.profile,
        signIn: state.esteemApp.signIn,
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        actions: bindActionCreators(actionCreators, dispatch),
        commentActions: bindActionCreators(commentActions,dispatch),
        initialize: bindActionCreators(initialize, dispatch)
    }
}

/**
 * UserEsteem - Component connected to the Redux Store
 * Container of the Leaderboard and the UserProfile, used on the `/de/[username]`
 * @param  {[Object]} props contains:
 * {[Object]} esteemApp
 */
const UserEsteem = (props) => {
    const {profile} = props;
    const {ui} = profile;
    const { isLoggedIn } = props.signIn;
    return (
        <div>
            <UserProfile profile={profile} ui={ui} isLoggedIn={isLoggedIn} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LeaderBoard profile={profile}
                                     actions={props.actions} 
                                     commentActions={props.commentActions}
                                     initialize={props.initialize}
                                     ui={ui}
                                     isLoggedIn={isLoggedIn}
                                     />
                    </div>
                </div>
            </div>
        </div>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(UserEsteem);