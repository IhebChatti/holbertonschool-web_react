import Login from "./Login";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login />);

test("crashing issue for Login", function () {
  shallow(<Login />);
});
test("Login", function () {
  expect(wrapper.find("body").exists()).toEqual(true);
});
test("Login input rendering", function () {
  expect(wrapper.find("body input")).toHaveLength(2);
});
test("Login label rendering", function () {
  expect(wrapper.find("body label")).toHaveLength(2);
});
