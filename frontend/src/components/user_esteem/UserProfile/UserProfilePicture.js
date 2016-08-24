import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Dropzone from 'react-dropzone';

const fields = ['avatar'];

export class UserProfilePicture extends Component {
  handleSubmit(data) {
    console.log('here is the fucking picture', data);
  }

  render() {
    const {
      fields,
      handleSubmit,
      resetForm,
    } = this.props;

    const centeredPicture = {
      backgroundImage: `url(${this.props.profilePicture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    const rounded = {
      borderRadius: '100%',
      height: '130px',
      width: '130px',
      border: '3px dashed white',
      display: 'flex',
      alignItems: 'center',
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          {this.props.profilePicture
          ? <img
            style={centeredPicture}
            className="img-responsive img-circle profile_picture"
          />
          : <div>
            <Dropzone
              style={rounded}
              accept="image/*"
              multiple={false}
              onDrop={(filesToUpload) => {
                this.handleSubmit(filesToUpload);
              }}
            >
              <p className="text-center no-margin">Changer sa photo de profil</p>
            </Dropzone>
            <button className="btn btn-greenplain profile__validateBtn">
              Valider
            </button>
          </div>}
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'userProfilePicture',
  fields,
})(UserProfilePicture);
