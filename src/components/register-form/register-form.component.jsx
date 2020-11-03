import React from "react";
import registerDetails from "../../services/register";
import RegisterTypes from "../../constants/register.types";
import EmailValidator from "email-validator";
import Spinner from "../spinner/spinner.component";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import Notification from "../notification/notification.component";
import Spacer from "../spacer/spacer.component";

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

  // Updates state with a error message text.
  setErrorText(fieldName) {
    const errorText = {
      name: { text: "Full Name must be at least 3 characters long." },
      confirmEmail: { text: "Emails don't match." },
      email: { text: "Please enter a valid email." },
      unknown: { text: "Sorry something went wrong, please try again." },
    };

    this.setState((prevState) => ({
      errors: [...prevState.errors, { message: errorText[fieldName].text }],
    }));
  }

  // When fields change, state is updated.
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // When the submit button is clicked.
  // If all fields are valid, calls performRegistration.
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, confirmEmail } = this.state;
    this.setState({ errors: [] });

    if (this.validateAllFields(name, email, confirmEmail)) {
      this.performRegistration(name, email.toLowerCase());
    }
  };

  // Checks values in each field are valid.
  // If invalid, sets error text is set in state via setErrorText.
  validateAllFields = (name, email, confirmEmail) => {
    let invalidFields = false;
    let fields = [
      { fieldName: "name", isValid: () => name.length > 2 },
      {
        fieldName: "confirmEmail",
        isValid: () => email.toLowerCase() === confirmEmail.toLowerCase(),
      },
      { fieldName: "email", isValid: () => EmailValidator.validate(email) },
    ];

    // Confirm each field is valid, if not call setErrorText method.
    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].isValid()) {
        this.setErrorText(fields[i].fieldName);
        invalidFields = true;
      }
    }

    return !invalidFields;
  };

  // Performs the registration by passing details to registerDetails function.
  performRegistration = (name, email) => {
    this.props.updateProgress(RegisterTypes.SUBMITTING);

    // Handles any errors returned from the registerDetails post call.
    const handleError = (response) => {
      console.log(response);
      this.props.updateProgress(RegisterTypes.INCOMPLETE);
      this.setErrorText("unknown");
    };

    registerDetails(name, email).then((response) => {
      if (response.status === 200) {
        this.props.updateProgress(RegisterTypes.COMPLETE);
      } else {
        handleError(response);
      }
    });
  };

  render() {
    const { name, email, confirmEmail, errors } = this.state;

    return (
      <div
        className={`register-form-wrapper ${
          this.props.progress === RegisterTypes.SUBMITTING && "submitting"
        }`}
      >
        <Spinner />

        <div className="form-container">
          <h3>Request an invite</h3>
          <Spacer />
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
              <Notification key={i} type="danger">
                {error.message}
              </Notification>
            ))}

            <CustomButton text="Submit" type="secondary" fullWidth />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
