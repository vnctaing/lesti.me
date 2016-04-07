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
    const {user} = props;
    const {leaderboard} = user;
    return (
        <div className="profile container">
            <div>
            </div>
            <div className="container-flex--hcenter container-flex--space-between profile__text">
                <UserProfilePicture profilePicture={user.profilePicture}/>
                <UserProfileStats user={user} leaderboard={leaderboard} />
                <Link to={props.addAppraiseeURL}><button className="btn btn-redplain float-right"><i className="fa fa-plus"></i>  Estimer quelqu'un</button></Link>

            </div>
        </div>

    );
}

export default UserProfile;
