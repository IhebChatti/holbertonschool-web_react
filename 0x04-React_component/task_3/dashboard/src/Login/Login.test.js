import React from "react";
import { shallow, configure } from "enzyme";
import Login from "./Login";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Login />", () => {
  it("renders a <Login /> component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });

  it("renders a <Login /> component and checks contents", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.App-login input")).toHaveLength(2);
    expect(wrapper.find("div.App-login label")).toHaveLength(2);
  });
});
