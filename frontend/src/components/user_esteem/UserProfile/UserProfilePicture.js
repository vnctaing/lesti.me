import Dropzone from 'react-dropzone';

/**
* It might be an overkill for the moment to create
* a component for a UserProfile right, but the UserProfilePicture
* might gain in UX complexity
*/
const UserProfilePicture = (props) => {
  const centeredPicture = {
    backgroundImage: `url(${props.profilePicture})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };
  return (
    <div>
      <img
        style={centeredPicture}
        className="img-responsive img-circle profile_picture"
      />
      <Dropzone>
        <div>Changer de photo de profil</div>
      </Dropzone>
    </div>
  );
};

export default UserProfilePicture;
