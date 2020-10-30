import React from "react";

import RegisterForm from "../register-form/register-form.component";

class Modal extends React.Component {
  state = {
    registered: false,
  };

  render() {
    return (
      <div className="modal-shade center-content">
        <div className="modal-content-container center-content">
          <RegisterForm registered={this.state.registered} />
        </div>
      </div>
    );
  }
}

export default Modal;
