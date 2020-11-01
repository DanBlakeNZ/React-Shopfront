import React from "react";
import registerDetails from "../../services/register";
import EmailValidator from "email-validator";
import Spinner from "../spinner/spinner.component";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import Notification from "../notification/notification.component";
import RegisterTypes from "../../constants/register.types";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
      errors: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, confirmEmail } = this.state;
    this.setState({ errors: [] });

    this.fieldsAreValid(name, email, confirmEmail) &&
      this.handleRegistration(name, email);
  };

  fieldsAreValid = (name, email, confirmEmail) => {
    const nameIsValid = this.validateName(name);
    const matchingEmails = this.validateConfirmEmail(email, confirmEmail);
    const emailIsValid = this.validateEmail(email);
    return nameIsValid && matchingEmails && emailIsValid;
  };

  handleRegistration = (name, email) => {
    this.props.updateProgress(RegisterTypes.SUBMITTING);

    const handleError = (error) => {
      console.log(error);
      this.props.updateProgress(RegisterTypes.INCOMPLETE);
      this.setErrorText(
        "Sorry, something went wrong. Please check your details and try again.",
        "danger"
      );
    };

    registerDetails(name, email).then((response) => {
      if (response.status === 200) {
        this.props.updateProgress(RegisterTypes.COMPLETE);
      } else {
        handleError(response);
      }
    });
  };

  validateName = (name) => {
    if (name.length < 3) {
      this.setErrorText("Full Name must be at least 3 characters long.", "danger");
      return false;
    }
    return true;
  };

  validateConfirmEmail = (email, confirmEmail) => {
    if (email !== confirmEmail) {
      this.setErrorText("Emails don't match.", "danger");
      return false;
    }
    return true;
  };

  validateEmail = (email) => {
    if (!EmailValidator.validate(email)) {
      this.setErrorText("Please enter a valid email.", "danger");
      return false;
    }
    return true;
  };

  setErrorText(errorText, errorType) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { errorType, message: errorText }],
    }));
  }

  render() {
    const { name, email, confirmEmail, errors } = this.state;
    return (
      <div>
        {this.props.registrationProgress === RegisterTypes.SUBMITTING ? (
          <Spinner />
        ) : (
          <form className="register-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="name"
              value={name}
              label="Full Name"
              onChange={this.handleChange}
              required
              autoFocus
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              label="Email"
              onChange={this.handleChange}
              required
            />
            <FormInput
              type="email"
              name="confirmEmail"
              value={confirmEmail}
              label="Confirm Email"
              onChange={this.handleChange}
              required
            />

            {errors.map((error, i) => (
              <Notification key={i} type={error.errorType}>
                {error.message}
              </Notification>
            ))}

            <CustomButton text="Submit" type="secondary" />
          </form>
        )}
      </div>
    );
  }
}

export default Register;
