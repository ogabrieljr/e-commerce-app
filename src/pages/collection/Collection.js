import React from "react";
import { connect } from "react-redux";
import { getShopCollections } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection item/CollectionItem";
import "./style.scss";

function Collection({ getShopCollections, match }) {
  const item = getShopCollections.find(
    collection => collection.routeName === match.params.collectionid
  );
  const { title, items } = item;
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
  getShopCollections: getShopCollections(state)
});

export default connect(mapStateToProps)(Collection);
