import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userProfileActions from '../../../actions/userProfileActions';


import Dropzone from 'react-dropzone';

const fields = ['avatar'];

export class UserProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.displayDropzoneOrPpicture = this.displayDropzoneOrPpicture.bind(this);
  }

  handleSubmit(data) {
    const body = new FormData();
    body.append('avatar', data[0]);
    this.props.userProfileActions.uploadPicture(body, this.props.profile._id);
  }

  displayDropzoneOrPpicture() {
    const centeredPicture = {
      backgroundImage: `url(${this.props.profilePicture})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    };

    const rounded = {
      borderRadius: '100%',
      height: '150px',
      width: '150px',
      border: '3px dashed white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    if (this.props.profilePicture && !this.props.profile.ui.showDropZone) {
      return (
        <div className="profilePicture__container">
          <img
            style={centeredPicture}
            className="img-responsive img-circle profile_picture"
          />
          <p
            className="profilePicture__overlay"
            onClick={() => {
              this.props.userProfileActions.toggleDropZoneProfilePicture()
            }}
          >
            Changer sa photo de profil
          </p>
        </div>
      );
    }

    return (
      <div>
        {this.props.profilePicture
          ? <i
            className="fa fa-times profilePicture__closeIcon"
            onClick={() => {
              this.props.userProfileActions.toggleDropZoneProfilePicture()
            }}
          >
          </i>
          : ''
        }
        <Dropzone
          style={rounded}
          accept="image/*"
          multiple={false}
          onDrop={(filesToUpload) => {
            this.handleSubmit(filesToUpload);
          }}
        >
          <p className="text-center no-margin">
            {
              this.props.profile.ui.isUploading
              ? <i className="fa fa-spin fa-spinner fa-2x"></i>
              : 'Faites glisser une photo'
            }
          </p>
        </Dropzone>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          {this.displayDropzoneOrPpicture()}
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userProfileActions: bindActionCreators(userProfileActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    profile: state.esteemApp.profile,
  };
}

const form = reduxForm({
  form: 'userProfilePicture',
  fields,
});

export default connect(mapStateToProps, mapDispatchToProps)(form(UserProfilePicture));
