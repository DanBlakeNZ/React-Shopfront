import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import HomePage from "./homepage.component";

const wrap = shallow(<HomePage />);

describe("HomePage component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePage />, div);
  });
});

describe("toggleModal method", () => {
  it("updates the state", () => {
    expect(wrap.state("showModal")).toEqual(false);
    wrap.instance().toggleModal();
    expect(wrap.state("showModal")).toEqual(true);
  });
});
