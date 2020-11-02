import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Headline from "./headline.component";

describe("Headline component", () => {
  const testText = "Test text";
  const wrap = shallow(<Headline>{testText}</Headline>);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Headline />, div);
  });

  it("includes correct text passed in as a prop", () => {
    expect(wrap.text()).toEqual(testText);
  });
});
