import React from "react";
import { connect } from "react-redux";
import { getShopItems } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection item/CollectionItem";
import "./style.scss";

function Collection({ getShopItems, match }) {
  const item = getShopItems.find(
    collection => collection.title.toLowerCase() === match.params.collectionid
  );
  const { title, items } = item;
  console.log(items);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  getShopItems: getShopItems(state)
});

export default connect(mapStateToProps)(Collection);
