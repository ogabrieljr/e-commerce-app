import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";

export default function stripeButton({ totalPrice }) {
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
      .then(res => alert("OK"))
      .catch(error => {
        alert("ERROR");
      });
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
