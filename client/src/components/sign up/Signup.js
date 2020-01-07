import React, { useState } from "react";
import Input from "../form input/Input";
import Button from "../button/button";
import "./style.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";

function Signup(props) {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = user;

  const submit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    props.signUpStart({ email, password, displayName });
  };

  const handleSubmit = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={submit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          label="Name"
          onChange={handleSubmit}
          required
        />
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleSubmit}
          required
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleSubmit}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm password"
          onChange={handleSubmit}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Signup);
