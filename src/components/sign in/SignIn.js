import React, { useState } from "react";
import Input from "../form input/Input";
import "./style.scss";
import Button from "../button/button";
import { connect } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/userActions";

function SignIn(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <>
        <Input
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          required
        />
        <Input
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          required
        />
        <div className="buttons">
          <Button
            onClick={() => props.emailSignInStart({ email, password })}
            type="submit">
            Sign in
          </Button>
          <Button signedIn onClick={props.googleSignInStart}>
            Sign in with Google
          </Button>
        </div>
      </>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: emailAndPassword => dispatch(emailSignInStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
