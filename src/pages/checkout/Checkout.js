import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkout item/CheckoutItem";
import "./style.scss";

function Checkout({ items }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL:</div>
    </div>
  );
}

const mapStateToProps = state => ({
  items: getItems(state)
});

export default connect(mapStateToProps)(Checkout);
