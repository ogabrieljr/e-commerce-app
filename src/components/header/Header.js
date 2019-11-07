import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/Firebase";
import { connect } from "react-redux";
import CartIcon from "../cart icon/CartIcon";
import Dropdown from "../cart dropdown/Dropdown";
import { getCurrentUser } from "../../redux/user/userSelector";
import { getHiddenState } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./HeaderStyles";

function Header({ getCurrentUser, getHiddenState }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {getCurrentUser ? (
          <OptionLink to="/" className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {getHiddenState ? null : <Dropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  getCurrentUser,
  getHiddenState
});

export default connect(mapStateToProps)(Header);
