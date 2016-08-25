export const UPLOADING_USER_PROFILE_PICTURE = 'UPLOADING_USER_PROFILE_PICTURE';
export function uploadingUserProfilePicture() {
  return {
    type: UPLOADING_USER_PROFILE_PICTURE,
  };
}

export const SUCCESSFULLY_UPLOADED_PROFILE_PICTURE = 'SUCCESSFULLY_UPLOADED_PROFILE_PICTURE';
export function successfullyUploadedProfilePicture(updatedAppraiser) {
  return {
    type: SUCCESSFULLY_UPLOADED_PROFILE_PICTURE,
    appraiser: updatedAppraiser,
  };
}

export function uploadPicture(body, appraiserId) {
  return (dispatch) => {
    dispatch(uploadingUserProfilePicture());
    fetch(`http://localhost:3000/avatar/${appraiserId}`, {
      method: 'POST',
      body,
    })
    .then((r) => r.json())
    .then((json) => {
      dispatch(successfullyUploadedProfilePicture(json.appraiser));
    });
  };
}
