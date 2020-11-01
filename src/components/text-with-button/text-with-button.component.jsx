import React from "react";
import CustomButton from "../custom-button/custom-button.component";
const TextWithButton = ({ children, onClick }) => {
  return (
    <div>
      {children}
      <CustomButton text="Close" onClick={onClick} />
    </div>
  );
};

export default TextWithButton;
