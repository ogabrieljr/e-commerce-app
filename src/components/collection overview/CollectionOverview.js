import React from "react";
import PreviewCollection from "../preview collection/PreviewCollection";
import { connect } from "react-redux";
import { getShopItems } from "../../redux/shop/shopSelector";

function CollectionOverview({ shopItems }) {
  return (
    <div>
      {shopItems.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  shopItems: getShopItems(state)
});

export default connect(mapStateToProps)(CollectionOverview);
