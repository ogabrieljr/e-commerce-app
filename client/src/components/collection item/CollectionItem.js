import React from "react";
import "./style.scss";
import Button from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import { getCurrentUser } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

function CollectionItem({ item, addItem, getCurrentUser, history }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      {getCurrentUser ? (
        <Button onClick={() => addItem(item)} inverted>
          ADD TO CART
        </Button>
      ) : (
        <Button onClick={() => history.push("/signin")} inverted>
          SIGN IN TO BUY
        </Button>
      )}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = createStructuredSelector({
  getCurrentUser
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
