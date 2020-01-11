import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function StripeButton({ totalPrice, history, dispatch }) {
  const stripePrice = totalPrice * 100;
  const handleToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token
      }
    })
      .then(res => {
        alert("Payment was successful!");
        history.push("/");
      })
      .catch(error => alert("There was an issue with your payment."));
  };

  return (
    <div>
      <StripeCheckout
        token={handleToken}
        name="Crown"
        description={`Total: $${totalPrice}`}
        stripeKey="pk_test_orFeQiHoizVs9ecOr3HVhmQk0072NJr84l"
        billingAddress
        shippingAddress
        amount={stripePrice}
        currency="USD"
      />
    </div>
  );
}

export default withRouter(connect(null)(StripeButton));
