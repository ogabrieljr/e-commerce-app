import React, { Component } from "react";
import Input from "../form input/Input";
import Button from "../button/button";
import { auth, createUserProfileDocument } from "../../firebase/Firebase";
import "./style.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  submit = async event => {
    const { displayName, email, password, confirmPassword } = this.state;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    this.props.signUpStart({ email, password, displayName });
  };

  change = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            label="Name"
            onChange={this.change}
            required
          />
          <Input
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.change}
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.change}
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm password"
            onChange={this.change}
            required
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Signup);
