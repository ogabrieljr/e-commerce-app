import React from "react";
import { ReactComponent as Icon } from "../../assets/cart icon.svg";
import "./style.scss";
import { connect } from "react-redux";
import { toggleHiddenState } from "../../redux/cart/cartActions";
import { itemCount } from "../../redux/cart/cartSelectors";

function CartIcon({ toggleHiddenState, count }) {
  return (
    <div onClick={toggleHiddenState} className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleHiddenState: () => dispatch(toggleHiddenState())
});

const mapStateToProps = state => ({
  count: itemCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
