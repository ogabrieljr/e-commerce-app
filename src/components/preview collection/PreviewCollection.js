import React from "react";
import CollectionItem from "../collection item/CollectionItem";
import "./style.scss";
import { Link } from "react-router-dom";

export default function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link to={`shop/${title.toLowerCase()}`}>{title}</Link>
      </h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
