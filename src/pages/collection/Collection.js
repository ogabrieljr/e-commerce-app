import React from "react";
import { connect } from "react-redux";
import { getShopItems } from "../../redux/shop/shopSelector";

function Collection({ getShopItems, match }) {
  const item = getShopItems.find(
    collection => collection.title.toLowerCase() === match.params.collectionid
  );
  console.log(item);
  return <div>collection</div>;
}

const mapStateToProps = state => ({
  getShopItems: getShopItems(state)
});

export default connect(mapStateToProps)(Collection);
