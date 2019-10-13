import React from "react";
import Button from "../button/button";
import "./style.scss";
import { connect } from "react-redux";

function Dropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {console.log(items)}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(Dropdown);
