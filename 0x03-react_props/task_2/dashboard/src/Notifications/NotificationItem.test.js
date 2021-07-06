import React from "react";
import { shallow, configure } from "enzyme";
import Notifications from "./Notifications";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Notification />", () => {
  const wrapper = shallow(<Notifications />);
  it("crashing", () => {
    shallow(<Notifications />);
  });

  it("NotificationItem", () => {
    const nItem = wrapper.find("NotificationItem");
    expect(nItem).toBeDefined();
    expect(nItem.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("paragraph", () => {
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  });
});
