import React from "react";
import CloseButton from "../close-button/close-button.component";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  render() {
    const { toggleModal, children } = this.props;

    // Handles clicks outside the modal vs inside the modal via the use of modalRef.
    // If outside the modal will toggle the modal to close, if inside nothing will happen.
    const handleOutsideClick = (e) => {
      !this.modalRef.current.contains(e.target) && toggleModal();
    };

    return (
      <div className="modal-shade center-content" onClick={handleOutsideClick}>
        <div className="modal-content-container center-content" ref={this.modalRef}>
          <CloseButton onClick={toggleModal} />
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
