import React from "react";
import CustomButton from "../button/customButton";
import CartItem from "../cartItem/cartItem";
import "./cartDropDown.scss";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      </div>
      <CustomButton> CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
