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
        <div className="profilePicture__container">
            <img style={centeredPicture}/>
        </div>
    );
}

export default UserProfilePicture;
