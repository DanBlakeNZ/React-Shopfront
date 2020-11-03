import React from "react";
import RegisterForm from "../register-form/register-form.component";
import Thanks from "../thanks/thanks.component";
import RegisterTypes from "../../constants/register.types"; //Used to avoid typos

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = { progress: RegisterTypes.INCOMPLETE };
  }

  setProgress = (progress) => {
    this.setState({ progress });
  };

  closeModal = () => {
    this.props.toggleModal();
  };

  render() {
    const { progress } = this.state;
    return (
      <div className="register">
        {progress !== RegisterTypes.COMPLETE ? (
          <RegisterForm progress={progress} updateProgress={this.setProgress} />
        ) : (
          <Thanks closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default Register;
