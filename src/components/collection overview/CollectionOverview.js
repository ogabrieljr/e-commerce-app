import React from "react";
import PreviewCollection from "../preview collection/PreviewCollection";
import { connect } from "react-redux";

function CollectionOverview({ collections }) {
  const collectionValues = Object.values(collections)
  console.log(collectionValues)
  return (
    <div>
      {collectionValues.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  collections: state.shopReducer.collections
});

export default connect(mapStateToProps)(CollectionOverview);
