import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

describe("Custom Button component", () => {
  const buttonText = "Test text";
  const onClick = jest.fn();

  const wrap = shallow(<CustomButton text={buttonText} onClick={onClick} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CustomButton />, div);
  });

  it("includes correct text passed in as a prop", () => {
    expect(wrap.text()).toEqual(buttonText);
  });

  it("handles onClick function", () => {
    expect(onClick).not.toBeCalled();
    wrap.find("button").simulate("click");
    expect(onClick).toBeCalled();
  });
});
