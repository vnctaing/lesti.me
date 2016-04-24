import UserProfile from './UserProfile/UserProfile.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'


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
    const { appraiser } = props.esteemApp;
    const addAppraiseeURL = `/de/${props.params.appraiser}/add`;
    return (
        <div>
            <UserProfile addAppraiseeURL={addAppraiseeURL} appraiser={appraiser} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <LeaderBoard appraisees={appraiser.appraisees}/>
                    </div>
                </div>
            </div>
        </div>
    )
};



export default connect(mapStateToProps, mapDispatchToProps)(UserEsteem);