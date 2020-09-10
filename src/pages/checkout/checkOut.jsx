import React from "react";
import "./checkOut.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkOutItem/checkOutItem";
import StripeCheckoutButton from '../../components/stripeButton/stripeButton'

const CheckOut = ({ cartItems, total }) => {
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
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className='test-warning'>
      Use the following card
      <br/>
      4242 4242 4242 4242 - 01/21 - 123
      </div>
      <StripeCheckoutButton price={total}/>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
