import React from "react";
import registerDetails from "../../services/register";
import EmailValidator from "email-validator";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
      errors: [],
      submitting: false,
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
    this.setState({ submitting: true });

    const handleError = (error) => {
      console.log(error);
      this.setState({ submitting: false });
      this.setErrorText("Sorry, something went wrong. Please try again.", "api");
    };

    registerDetails(name, email).then((response) => {
      if (response.status === 200) {
        this.props.registrationComplete();
      } else {
        handleError(response);
      }
    });
  };

  validateName = (name) => {
    if (name.length < 3) {
      this.setErrorText("Full Name must be at least 3 characters long", "name");
      return false;
    }
    return true;
  };

  validateConfirmEmail = (email, confirmEmail) => {
    if (email !== confirmEmail) {
      this.setErrorText("Emails don't match", "confirmEmail");
      return false;
    }
    return true;
  };

  validateEmail = (email) => {
    if (!EmailValidator.validate(email)) {
      this.setErrorText("Please enter a valid email", "email");
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
    const { name, email, confirmEmail, errors, submitting } = this.state;
    return (
      <div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
          <CustomButton text="Submit" />
        </form>
        {errors.length > 0 &&
          errors.map((error) => <p key={error.errorType}> {error.message} </p>)}
        {submitting && <p>Submitting...</p>}
      </div>
    );
  }
}

export default Register;
