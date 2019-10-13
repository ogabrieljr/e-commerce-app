import React from "react";
import Button from "../button/button";
import "./style.scss";
import { connect } from "react-redux";
import CartItem from "../cart item/CartItem";

function Dropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(Dropdown);
