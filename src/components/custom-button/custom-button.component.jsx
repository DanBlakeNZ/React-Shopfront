import React from "react";

const CustomButton = ({ text, onClick, type }) => (
  <button className={`custom-button ${type}`} onClick={onClick}>
    {text}
  </button>
);

export default CustomButton;
