import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Modal from "./modal.component";

describe("Modal", () => {
  const modalChild = "<div>Test Text</div>";
  const onClick = jest.fn();

  const wrap = shallow(<Modal toggleModal={onClick}>{modalChild}</Modal>);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal />, div);
  });

  it("includes child element", () => {
    expect(wrap.containsMatchingElement(modalChild)).toEqual(true);
  });

  it("close button calls toggleModal function", () => {
    expect(onClick).not.toBeCalled();
    wrap.find("button").simulate("click");
    expect(onClick).toBeCalled();
  });

  // Test modal shade closing
});
