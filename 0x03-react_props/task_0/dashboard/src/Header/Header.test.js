import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<Header />);

test('checkin header', function () {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
