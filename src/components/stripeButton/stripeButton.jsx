import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPoijCuhJ7Mvekg5gz8yTKVAHrTJnYI0ADMWXL6SUpvIi2cEh1iiwSaAWdB7qv7xfBU9jDxfLbxlvGxcPLFG5RE00RtPe4Pmr";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Tcloth"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay '
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
