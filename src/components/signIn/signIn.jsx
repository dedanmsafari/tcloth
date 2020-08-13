import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import './signIn.scss'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
        
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
         
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
