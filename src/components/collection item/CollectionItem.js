import React from "react";
import "./style.scss";
import Button from "../button/button";

export default function CollectionItem({ item }) {
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
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted>ADD TO CART</Button>
    </div>
  );
}
