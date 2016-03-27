/** 
 * It might be an overkill for the moment to create
 * a component for a UserProfile right, but the UserProfilePicture
 * might gain in UX complexity
 */
const UserProfilePicture = (props) => {
    return (
        <div className="profilePicture__container">
            <img src={props.profilePicture}/>
        </div>
    );
}

export default UserProfilePicture;
