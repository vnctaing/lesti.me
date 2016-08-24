export const UPLOADING_USER_PROFILE_PICTURE = 'UPLOADING_USER_PROFILE_PICTURE';
export function uploadingUserProfilePicture() {
  return {
    type: UPLOADING_USER_PROFILE_PICTURE,
  };
}

export function uploadPicture(data, appraiserId) {
  return (dispatch) => {
    dispatch(uploadingUserProfilePicture());
    fetch(`http://localhost:3000/avatar/${appraiserId}`, {
      method: 'POST',
      body: data
    });
  }
}
