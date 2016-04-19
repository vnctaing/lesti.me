import UserProfilePicture from './UserProfilePicture.jsx'
import UserProfileStats from './UserProfileStats.jsx'
import {Link} from 'react-router'

/**
 * UserProfile Component - The component that contains
 * every informations relative to the /de/User (profile 
 * picture, stats ...)
 * @param  {[Object]} props
 */
const UserProfile = (props) => {
    const {appraiser} = props;
    const {appraisees} = appraiser
    return (
        <div className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-xs-4">
                        <UserProfilePicture profilePicture={appraiser.profilePicture}/></div>
                    <div className="col-xs-8 text-right">
                        <UserProfileStats appraiser={appraiser} appraisees={appraisees} />
                        <Link to={props.addAppraiseeURL}><button className="btn btn-redplain"><i className="fa fa-plus"></i>  Estimer quelqu'un</button></Link>
                    </div>                    
                </div>
            </div>
        </div>

    );
}

export default UserProfile;
