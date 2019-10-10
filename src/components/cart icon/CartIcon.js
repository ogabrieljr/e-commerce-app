import React from "react";
import { ReactComponent as Icon } from "../../assets/cart icon.svg";
import "./style.scss";
import { connect } from "react-redux";
import { toggleCartState } from "../../redux/cart/cartAction";

function CartIcon({ toggleCartState }) {
  return (
    <div onClick={toggleCartState} className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartState: () => dispatch(toggleCartState())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
