import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<App />);

test('checkin crashing issue', function () {
  shallow(<App />);
});

test('checkin body', function () {
  expect(wrapper.find('body.App-body').exists()).toEqual(true);
});
