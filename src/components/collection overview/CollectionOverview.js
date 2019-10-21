import React from "react";
import PreviewCollection from "../preview collection/PreviewCollection";
import { connect } from "react-redux";
import { getShopCollections } from "../../redux/shop/shopSelector";

function CollectionOverview({ collections }) {
  console.log(collections)
  return (
    <div>
      {/* {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))} */}
    </div>
  );
}

const mapStateToProps = state => ({
  collections: state.shopReducer.collections
});

export default connect(mapStateToProps)(CollectionOverview);
