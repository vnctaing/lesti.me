/** 
 * It might be an overkill for the moment to create
 * a component for a UserProfile right, but the UserProfilePicture
 * might gain in UX complexity
 */
const UserProfilePicture = (props) => {
    return (
        <div>
            <img src={props.profilePicture} className="img-responsive img-circle profile_picture"/>
        </div>
    );
}

export default UserProfilePicture;
