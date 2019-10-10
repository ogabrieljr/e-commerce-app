import React from "react";
import { ReactComponent as Icon } from "../../assets/cart icon.svg";
import "./style.scss";

export default function CartIcon() {
  return (
    <div className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
