import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer.component";

describe("Footer component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div);
  });
});
