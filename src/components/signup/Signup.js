import React, { Component } from "react";
import Input from "../form input/Input";
import Button from "../button/button";
import { auth, createUserProfileDocument } from "../../firebase/Firebase";
import "./style.scss";

export default class Signup extends Component {
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

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
     } catch (error) {
      console.log(error);
    }
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
            label="Display name"
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
            label="Password"
            onChange={this.change}
            required
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}
