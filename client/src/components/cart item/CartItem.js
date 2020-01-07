import React from "react";
import "./style.scss";

function CartItem({ item }) {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${price} x {quantity}
        </span>
      </div>
    </div>
  );
}

export default React.memo(CartItem);
