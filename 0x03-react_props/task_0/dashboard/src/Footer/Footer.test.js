import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<Footer />);

test('checkin footer', function () {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
