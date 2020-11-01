import React from "react";
import CustomButton from "../custom-button/custom-button.component";
const TextWithButton = ({ children, onClick, buttonType }) => {
  return (
    <div>
      {children}
      <CustomButton text="Close" onClick={onClick} type={buttonType} />
    </div>
  );
};

export default TextWithButton;
