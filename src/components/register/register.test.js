import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Register from "./register.component";
import Spinner from "../spinner/spinner.component";
import RegisterForm from "../register-form/register-form.component";
// import TextWithButton from "../text-with-button/text-with-button.component";
import RegisterTypes from "../../constants/register.types";

describe("Register component", () => {
  const wrap = shallow(<Register />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Register />, div);
  });

  it("RegisterForm renders when state is set to 'incomplete'", () => {
    wrap.setState({ registrationProgress: RegisterTypes.INCOMPLETE });
    expect(wrap.containsMatchingElement(<RegisterForm />)).toBeTruthy();
  });

  it("Spinner renders when state is set to 'submitting'", () => {
    wrap.setState({ registrationProgress: RegisterTypes.SUBMITTING });
    expect(wrap.containsMatchingElement(<Spinner />)).toBeTruthy();
  });

  // it("TextWithButton renders when state is set to 'complete'", () => {
  //   wrap.setState({ registrationProgress: RegisterTypes.COMPLETE });
  // }
});
