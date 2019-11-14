import React, { Component } from "react";
import Input from "../form input/Input";
import "./style.scss";
import Button from "../button/button";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/userActions";

class SignIn extends Component {
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

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in</span>
        <div>
          <Input
            change={this.change}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <Input
            change={this.change}
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <Button
              onClick={() => this.props.emailSignInStart({ email, password })}
              type="submit">
              Sign in
            </Button>
            <Button signedIn onClick={this.props.googleSignInStart}>
              Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
