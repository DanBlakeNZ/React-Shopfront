import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

describe("App component", () => {
  const wrap = shallow(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("contains Homepage component", () => {
    expect(wrap.containsMatchingElement(<HomePage />)).toBeTruthy();
  });

  it("contains Header component", () => {
    expect(wrap.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it("contains Footer component", () => {
    expect(wrap.containsMatchingElement(<Footer />)).toBeTruthy();
  });
});
