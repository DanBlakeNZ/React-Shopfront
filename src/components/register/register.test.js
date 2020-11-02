import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Register from "./register.component";
import Thanks from "../thanks/thanks.component";
import RegisterForm from "../register-form/register-form.component";
import RegisterTypes from "../../constants/register.types";

describe("Register component", () => {
  const wrap = shallow(<Register />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Register />, div);
  });

  it("RegisterForm renders when state is set to 'incomplete'", () => {
    wrap.setState({ progress: RegisterTypes.INCOMPLETE });
    expect(wrap.containsMatchingElement(<RegisterForm />)).toBeTruthy();
  });

  it("Thanks renders when state is set to 'submitting'", () => {
    wrap.setState({ progress: RegisterTypes.COMPLETE });
    expect(wrap.containsMatchingElement(<Thanks />)).toBeTruthy();
  });
});
