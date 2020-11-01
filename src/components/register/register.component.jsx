import React from "react";
import RegisterForm from "../register-form/register-form.component";
import CustomButton from "../custom-button/custom-button.component";
import Subheading from "../subheading/subheading.component";

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
        {registrationProgress !== RegisterTypes.COMPLETE && (
          <>
            <Subheading text={"Request an Invite"} />
            <RegisterForm
              registrationProgress={registrationProgress}
              updateProgress={this.setRegistrationProgress}
            />
          </>
        )}
        {registrationProgress === RegisterTypes.COMPLETE && (
          <>
            <Subheading text={"All done!"} />
            <Subheading
              text={"You will be the first to experience Broccoli & Co. when we launch."}
            />
            <CustomButton text="Thanks" type="secondary" onClick={this.closeModal} />
          </>
        )}
      </div>
    );
  }
}

export default Register;
