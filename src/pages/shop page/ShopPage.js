import React, { Component } from "react";
import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";

class ShopPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.url}`} component={CollectionOverview} />
        <Route path={`${match.url}/:collectionid`} component={Collection} />
      </div>
    );
  }
}

export default ShopPage;
