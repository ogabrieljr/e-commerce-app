import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./style.scss";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cart icon/CartIcon";
import Dropdown from "../cart dropdown/Dropdown";
import { getCurrentUser } from "../../redux/user/userSelector";
import { getHiddenState } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

function Header({ getCurrentUser, getHiddenState }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {getCurrentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {getHiddenState ? null : <Dropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  getCurrentUser,
  getHiddenState
});

export default connect(mapStateToProps)(Header);
