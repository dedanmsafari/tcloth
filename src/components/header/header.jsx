import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/cartIcon";
import { createStructuredSelector } from "reselect";
import CartDropDown from "../cartDropDown/cartDropDown";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="./shop">
          SHOP
        </Link>
        <Link className="option" to="./checkout">
          CHECKOUT
        </Link>
        <Link className="option" to="./contacts">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
