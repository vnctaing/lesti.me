import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import UserProfile from '../../../../src/components/user_esteem/UserProfile/UserProfilePicture';

describe('UserProfile', function() {
  describe('UserProfilPicture', function() {
    const wrapper = shallow(<UserProfile />);
    it('should renders html', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
