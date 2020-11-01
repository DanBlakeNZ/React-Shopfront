import React from "react";

const CloseButton = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      &#10006;
    </button>
  );
};

export default CloseButton;
