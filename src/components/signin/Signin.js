import React, { Component } from "react";
import Input from "../form input/Input";
import "./style.scss";
import Button from "../button/button";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import { googleSignInStart } from "../../redux/user/userActions";

class Signin extends Component {
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

  submit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };

  render() {
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
            <Button onClick={this.submit} type="submit">
              Sign in
            </Button>
            <Button signedIn onClick={this.props.googleSignInStart}>
              Sign in with Google
            </Button>
          </div>
          {console.log(this.props.currentUser)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

const state = state => ({
  currentUser: state.userReducer.currentUser
});

export default connect(
  state,
  mapDispatchToProps
)(Signin);
