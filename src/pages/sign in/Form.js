import React from "react";
import SignIn from "../../components/signin/SignIn";
import Signup from "../../components/signup/Signup";
import "./style.scss";

export default function Form() {
  return (
    <div className="form">
      <SignIn />
      <Signup />
    </div>
  );
}
