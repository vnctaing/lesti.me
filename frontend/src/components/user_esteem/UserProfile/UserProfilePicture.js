import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userProfileActions from '../../../actions/userProfileActions';


import Dropzone from 'react-dropzone';

const fields = ['avatar'];

export class UserProfilePicture extends Component {
  handleSubmit(data) {
    const body = new FormData();
    body.append('avatar', data[0]);
    this.props.userProfileActions.uploadPicture(body, this.props.profile._id);
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
          </div>}
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
