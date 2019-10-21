import React from "react";
import PreviewCollection from "../preview collection/PreviewCollection";
import { connect } from "react-redux";
import { getShopCollections } from "../../redux/shop/shopSelector";

function CollectionOverview({ collections }) {
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  collections: getShopCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);
