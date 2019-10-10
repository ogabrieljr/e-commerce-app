import React from "react";
import Button from "../button/button";
import "./style.scss";

export default function Dropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
