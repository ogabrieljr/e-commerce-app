import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./style.scss";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cart icon/CartIcon";
import Dropdown from "../cart dropdown/Dropdown";

function Header({ currentUser, hidden }) {
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
        {currentUser ? (
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
      {hidden ? null : <Dropdown />}
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  hidden: state.cartReducer.hidden
});

export default connect(mapStateToProps)(Header);