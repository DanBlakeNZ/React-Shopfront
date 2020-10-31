import React from "react";
import axios from "axios";
import EmailValidator from "email-validator";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class RegisterForm extends React.Component {
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

    if (name.length < 3) {
      this.setErrorText("Full Name must be at least 3 characters long", "name");
    }

    if (email !== confirmEmail) {
      this.setErrorText("Emails don't match", "confirmEmail");
    }

    if (!EmailValidator.validate(email)) {
      this.setErrorText("Please enter a valid email", "email");
    }

    // Check for errors first
    this.handleRegistration(name, email);
  };

  handleRegistration = async (name, email) => {
    const handleSuccess = () => {
      this.setState = {
        name: "",
        email: "",
        confirmEmail: "",
      };
      this.props.registrationComplete();
    };

    const handleError = (error) => {
      console.log(error);
      this.setErrorText(
        "Sorry, something went wrong. Please check your details and try again.",
        "api"
      );
    };

    axios
      .post(
        "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
        { name, email }
      )
      .then(function (response) {
        handleSuccess();
      })
      .catch(function (error) {
        handleError(error);
      });
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
      </div>
    );
  }
}

export default RegisterForm;
