import React from "react";
import Button from "../button/button";
import "./style.scss";
import { connect } from "react-redux";
import CartItem from "../cart item/CartItem";

function Dropdown({ items }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="message">Your cart is empty!</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default connect(mapStateToProps)(Dropdown);
