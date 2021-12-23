import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K9iBiHyo8qQA8lRkzTaZZNr6kw9NIhaqLvKCbRLTGAhA2VVUU1NoWd52jdtGPuxFShIDiEVyAs0VcLhXjjnJvBK00IQIyaq7U";
  const onToken = (token) => {
    alert("Payment Succesful");
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
