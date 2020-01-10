import React from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/checkout item/CheckoutItem";
import "./style.scss";
import { totalPrice } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import StripeButton from "../../components/stripe/StripeButton";

function Checkout({ getItems, totalPrice }) {
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
      {getItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL: ${totalPrice}</div>
      <StripeButton totalPrice={totalPrice} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  getItems,
  totalPrice
});

export default connect(mapStateToProps)(Checkout);
