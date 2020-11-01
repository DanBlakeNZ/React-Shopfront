import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Subheading from "./subheading.component";

describe("Subheading component", () => {
  const testText = "Test text";
  const wrap = shallow(<Subheading text={testText} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Subheading />, div);
  });

  it("includes correct text passed in as a prop", () => {
    expect(wrap.text()).toEqual(testText);
  });
});
