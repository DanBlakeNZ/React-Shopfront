import React from "react";

const CustomButton = ({ text, onClick, type, fullWidth }) => (
  <button
    className={`custom-button ${type} ${fullWidth && "full-width"}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default CustomButton;
