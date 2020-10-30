import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      confirmEmail: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email } = this.state;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    };
    fetch(
      "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        console.log(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, confirmEmail } = this.state;
    return (
      <div>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={name}
            label="Name"
            onChange={this.handleChange}
            required
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
      </div>
    );
  }
}

export default RegisterForm;
