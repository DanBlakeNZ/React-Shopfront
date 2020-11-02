import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import Spacer from "../spacer/spacer.component";

const Thanks = ({ closeModal }) => {
  return (
    <div className="thanks">
      <div className="thanks-headline">All done!</div>
      <Spacer />
      <div className="thanks-text">
        You will be the first to experience Broccoli & Co when we launch.
      </div>
      <CustomButton text="Ok" type="secondary" onClick={closeModal} />
    </div>
  );
};

export default Thanks;
