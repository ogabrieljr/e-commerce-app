import StripeCheckout from "react-stripe-checkout";

import React from "react";

export default function stripeButton({ totalPrice }) {
  const handleToken = token => {
    console.log(token);
  };

  return (
    <>
      <StripeCheckout
        token={handleToken}
        name="Crown"
        description={`Total: $${totalPrice}`}
        stripeKey="pk_test_orFeQiHoizVs9ecOr3HVhmQk0072NJr84l"
        billingAddress
        shippingAddress
        amount={totalPrice * 100}
        currency="USD"
      />
    </>
  );
}
