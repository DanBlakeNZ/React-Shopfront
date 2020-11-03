import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import RegisterForm from "./register-form.component";

const wrap = shallow(<RegisterForm />);
const validName = "John";
const invalidName = "Da";
const validEmail = "john@example.com";
const invalidEmail = "john@examplecom";
const matchingEmail = "john@example.com";
const invalidMatchingEmail = "john1@example.com";

describe("RegisterForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegisterForm />, div);
  });
});

describe("validateAllFields method", () => {
  it("if all fields are valid, true is returned", () => {
    expect(
      wrap.instance().validateAllFields(validName, validEmail, matchingEmail)
    ).toEqual(true);
  });

  it("if an invalid name is passed, false is returned", () => {
    expect(
      wrap.instance().validateAllFields(invalidName, validEmail, matchingEmail)
    ).toEqual(false);
  });

  it("if an invalid email is passed, false is returned", () => {
    expect(
      wrap.instance().validateAllFields(validName, invalidEmail, invalidEmail)
    ).toEqual(false);
  });

  it("if an emails don't match, false is returned", () => {
    expect(
      wrap.instance().validateAllFields(validName, validEmail, invalidMatchingEmail)
    ).toEqual(false);
  });
});

describe("setErrorText method", () => {
  const errorText = {
    name: { text: "Full Name must be at least 3 characters long." },
    confirmEmail: { text: "Emails don't match." },
    email: { text: "Please enter a valid email." },
    unknown: { text: "Sorry something went wrong, please try again." },
  };

  it("name error text is set to state", () => {
    wrap.setState({ errors: [] });
    expect(wrap.state("errors")).toEqual([]);
    wrap.instance().setErrorText("name");
    expect(wrap.state("errors")).toEqual([{ message: errorText.name.text }]);
  });

  it("confirmEmail error text is set to state", () => {
    wrap.setState({ errors: [] });
    expect(wrap.state("errors")).toEqual([]);
    wrap.instance().setErrorText("confirmEmail");
    expect(wrap.state("errors")).toEqual([{ message: errorText.confirmEmail.text }]);
  });

  it("email error text is set to state", () => {
    wrap.setState({ errors: [] });
    expect(wrap.state("errors")).toEqual([]);
    wrap.instance().setErrorText("email");
    expect(wrap.state("errors")).toEqual([{ message: errorText.email.text }]);
  });

  it("unknown error text is set to state", () => {
    wrap.setState({ errors: [] });
    expect(wrap.state("errors")).toEqual([]);
    wrap.instance().setErrorText("unknown");
    expect(wrap.state("errors")).toEqual([{ message: errorText.unknown.text }]);
  });
});
