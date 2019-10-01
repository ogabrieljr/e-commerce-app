import React, { Component } from "react";
import Input from "../form input/Input";
import "./style.scss";
import Button from "../button/button";

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  change = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in</span>
        <form onSubmit={this.submit}>
          <Input
            change={this.change}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            required
          />
          <Input
            change={this.change}
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            required
          />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    );
  }
}
