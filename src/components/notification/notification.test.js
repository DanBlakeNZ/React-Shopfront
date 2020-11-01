import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Notification from "./notification.component";

describe("Notification component", () => {
  const notificationText = "Test text";
  const notificationType = "warning";
  const wrap = shallow(
    <Notification type={notificationType}>{notificationText}</Notification>
  );

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notification />, div);
  });

  it("applies the correct class name", () => {
    expect(wrap.hasClass(`notification-${notificationType}`)).toEqual(true);
  });

  it("includes correct text passed in as a prop", () => {
    expect(wrap.text()).toEqual(notificationText);
  });
});
