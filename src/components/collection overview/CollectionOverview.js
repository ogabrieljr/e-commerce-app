import React from "react";
import PreviewCollection from "../preview collection/PreviewCollection";
import { connect } from "react-redux";
import { collectionValues } from "../../redux/shop/shopSelector";

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
  collections: collectionValues(state)
});

export default connect(mapStateToProps)(CollectionOverview);
