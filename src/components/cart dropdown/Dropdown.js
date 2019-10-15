import React from "react";
import Button from "../button/button";
import "./style.scss";
import { connect } from "react-redux";
import CartItem from "../cart item/CartItem";
import { withRouter } from "react-router-dom";
import { getItems } from "../../redux/cart/cartSelectors";

function Dropdown({ items, history }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="message">Your cart is empty!</span>
        )}
      </div>
      <Button onClick={() => history.push("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  items: getItems(state)
});

export default withRouter(connect(mapStateToProps)(Dropdown));
