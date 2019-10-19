import React from "react";
import PreviewCollection from "../../components/preview collection/PreviewCollection";
import { connect } from "react-redux";

function ShopPage({ shopItems }) {
  return (
    <div>
      {shopItems.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  shopItems: state.shopReducer.collections
});

export default connect(mapStateToProps)(ShopPage);
