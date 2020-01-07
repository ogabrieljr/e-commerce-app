import React, { useEffect } from "react";
import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import Spinner from "../../components/spinner/Spinner";
import { getShopCollections } from "../../redux/shop/shopSelector";

function ShopPage({ fetchCollectionsStart, match, getShopCollections }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <>
      {getShopCollections === "" ? (
        <Spinner />
      ) : (
        <>
          <Route exact path={`${match.url}`} component={CollectionOverview} />
          <Route path={`${match.url}/:collectionid`} component={Collection} />
        </>
      )}
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const state = state => ({
  getShopCollections: getShopCollections(state)
});

export default connect(state, mapDispatchToProps)(ShopPage);
