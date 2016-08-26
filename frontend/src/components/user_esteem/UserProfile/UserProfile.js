import UserProfilePicture from './UserProfilePicture';
import UserProfileStats from './UserProfileStats';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

/**
 * UserProfile Component - The component that contains
 * every informations relative to the /de/User (profile
 * picture, stats ...)
 * @param  {[Object]} props
 */
const fields = ['avatar'];
const UserProfile = (props) => {
  const { profile, session } = props;
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            {
              profile.ui.isFetchingProfile
              ? <i className="fa fa-spin fa-spinner fa-4x"></i>
              : <UserProfilePicture profilePicture={profile.profilePicture} />
            }
          </div>
          <div className="col-xs-8 text-right">
            <UserProfileStats profile={profile} />
            {Object.keys(session.verifiedSessionToken).length && props.isItsPage
              ? <Link to={`/de/${profile.name}/add`}>
                <button className="btn btn-redplain">
                  <i className="fa fa-plus"></i>
                  Estimer quelqu'un
                </button>
              </Link>
              : ''
            }
          </div>
        </div>
      </div>
    </div>

  );
};

export default reduxForm({
  form: 'avatarForm',
  fields,
})(UserProfile);
