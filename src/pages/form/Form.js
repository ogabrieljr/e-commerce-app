import React from "react";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup"
import "./style.scss"

export default function Form() {
  return (
    <div className="form">
      <Signin />
      <Signup />
    </div>
  ); 
}
