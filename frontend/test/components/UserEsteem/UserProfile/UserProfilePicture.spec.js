import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {UserProfilePicture} from '../../../../src/components/user_esteem/UserProfile/UserProfilePicture';
import Dropzone from 'react-dropzone';

describe('UserProfilePicture', function() {
  context('when there\'s no profile picture provided',() => {
    it('should renders the <DropZone/ > component', () => {
      const wrapper = shallow(<UserProfilePicture profilePicture={null} />);
      expect(wrapper.find(Dropzone)).to.have.length(1);
    });
  });
  context('when there is a profile picture provided',() => {
    it('should renders the profile picture in <img>', () => {
      const wrapper = shallow(
        <UserProfilePicture profilePicture="http://lorempixel.com/150/150" />
      );
      expect(wrapper.find(Dropzone)).to.have.length(0);
      expect(wrapper.find('img.profile_picture')).to.have.length(1);
    });
  });
});
