import React, { Component } from "react";
import Input from "../form input/Input";
import "./style.scss";
import Button from "../button/button";
import { signInWithGoogle } from "../../firebase/Firebase";

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
          <div className="buttons">
            <Button>Sign in</Button>
            <Button signedIn onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
