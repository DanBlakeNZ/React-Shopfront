import React from "react";

const CustomButton = ({ text, onClick }) => (
  <button className="custom-button primary" onClick={onClick}>
    {text}
  </button>
);

export default CustomButton;
