import React from "react";
import Spinner from "../spinner/spinner.component";
import RegisterForm from "../register-form/register-form.component";
import TextWithButton from "../text-with-button/text-with-button.component";
import RegisterTypes from "../../constants/register.types"; //Used to avoid typos

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registrationProgress: RegisterTypes.INCOMPLETE,
    };
  }

  setRegistrationProgress = (progress) => {
    this.setState({ registrationProgress: progress });
  };

  closeModal = () => {
    this.props.toggleModal();
  };

  render() {
    const { registrationProgress } = this.state;
    return (
      <div className="register">
        {registrationProgress === RegisterTypes.INCOMPLETE && (
          <RegisterForm updateProgress={this.setRegistrationProgress} />
        )}
        {registrationProgress === RegisterTypes.SUBMITTING && <Spinner />}
        {registrationProgress === RegisterTypes.COMPLETE && (
          <TextWithButton onClick={this.closeModal}>Thanks!</TextWithButton>
        )}
      </div>
    );
  }
}

export default Register;
