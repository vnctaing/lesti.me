/** 
 * It might be an overkill for the moment to create
 * a component for a UserProfile right, but the UserProfilePicture
 * might gain in UX complexity
 */
const UserProfilePicture = (props) => {
    return <img src={props.profilePicture}/>;
}

export default UserProfilePicture;
