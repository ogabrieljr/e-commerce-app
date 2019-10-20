import React from "react";
import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";

export default function ShopPage({ match }) {
  return (
    <div>
      <Route exact path={`${match.url}`} component={CollectionOverview} />
      <Route path={`${match.url}/:collectionid`} component={Collection} />
    </div>
  );
}
