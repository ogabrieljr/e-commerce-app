import React from "react";
import { ReactComponent as Icon } from "../../assets/cart icon.svg";
import "./style.scss";
import { connect } from "react-redux";
import { toggleCartState } from "../../redux/cart/cartActions";

function CartIcon({ toggleCartState, count }) {
  return (
    <div onClick={toggleCartState} className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCartState: () => dispatch(toggleCartState())
});

const mapStateToProps = state => ({
  count: state.cartReducer.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
