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
        esteemApp: state.esteemApp
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
    const { appraiser, user_esteem } = props.esteemApp.profile;
    const addAppraiseeURL = `/de/${props.params.appraiser}/add`;
    return (
        <div>
            <UserProfile addAppraiseeURL={addAppraiseeURL} appraiser={appraiser} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LeaderBoard appraiser={appraiser}
                                     actions={props.actions} 
                                     commentActions={props.commentActions}
                                     initialize={props.initialize}
                                     user_esteem={user_esteem}
                                     />
                    </div>
                </div>
            </div>
        </div>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(UserEsteem);