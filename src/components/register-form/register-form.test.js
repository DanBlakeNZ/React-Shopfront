import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import RegisterForm from "./register-form.component";

const wrap = shallow(<RegisterForm />);

describe("RegisterForm", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegisterForm />, div);
  });
});

describe("validateName method", () => {
  it("returns true with a name of 3 or more characters", () => {
    expect(wrap.instance().validateName("Dan")).toEqual(true);
  });

  it("returns false with a name of less than 3 characters", () => {
    expect(wrap.instance().validateName("Da")).toEqual(false);
  });
});

describe("validateConfirmEmail method", () => {
  it("returns true when provided matching emails", () => {
    expect(
      wrap.instance().validateConfirmEmail("john@test.com", "john@test.com")
    ).toEqual(true);
  });

  it("returns true when provided different emails", () => {
    expect(wrap.instance().validateConfirmEmail("sam@test.com", "john@test.com")).toEqual(
      false
    );
  });
});

describe("validateEmail method", () => {
  it("returns true when provided a valid email", () => {
    expect(wrap.instance().validateEmail("john@test.com")).toEqual(true);
  });

  it("returns true when provided an invalid email", () => {
    expect(wrap.instance().validateEmail("sam@.com")).toEqual(false);
  });
});

describe("fieldsAreValid method", () => {
  it("returns true when provided a valid name, email and confirm email", () => {
    expect(
      wrap.instance().fieldsAreValid("John", "john@test.com", "john@test.com")
    ).toEqual(true);
  });

  it("returns false when provided a valid name, confirm email but an invalid email", () => {
    expect(wrap.instance().fieldsAreValid("John", "john@.com", "john@test.com")).toEqual(
      false
    );
  });
});
