import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";

configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

test("checkin crashing issue", function () {
  shallow(<App />);
});

test("checking Notifications rendering", function () {
  expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
});

test("checking Header rendering", function () {
  expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
});

test("checking Footer rendering", function () {
  expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
});

test("checking Login rendering", function () {
  expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
});
