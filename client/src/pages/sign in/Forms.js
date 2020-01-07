import React from "react";
import SignIn from "../../components/sign in/SignIn";
import Signup from "../../components/sign up/Signup";
import "./style.scss";

export default function Form() {
  return (
    <div className="form">
      <SignIn />
      <Signup />
    </div>
  );
}
