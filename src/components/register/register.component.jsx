import React, { useState } from "react";
import Spinner from "../spinner/spinner.component";
import RegisterForm from "../register-form/register-form.component";
import CustomButton from "../custom-button/custom-button.component";
import RegisterTypes from "../../constants/register.types"; //Used to avoid typos

const Register = (props) => {
  const [registrationProgress, setRegistrationProgress] = useState(
    RegisterTypes.INCOMPLETE
  );

  return (
    <div>
      {registrationProgress === RegisterTypes.INCOMPLETE && (
        <RegisterForm updateProgress={setRegistrationProgress} />
      )}
      {registrationProgress === RegisterTypes.SUBMITTING && <Spinner />}
      {registrationProgress === RegisterTypes.COMPLETE && (
        <div>
          <p>Thanks!</p>
          <CustomButton text="Close" onClick={props.toggleModal} />
        </div>
      )}
    </div>
  );
};

export default Register;
