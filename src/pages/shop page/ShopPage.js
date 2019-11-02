import React, { Component } from "react";
import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import { connect } from "react-redux";
import {  fetchCollectionsAsync } from "../../redux/shop/shopActions";
import Spinner from "../../components/spinner/Spinner";
import {getShopCollections} from "../../redux/shop/shopSelector"

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {this.props.getShopCollections === "" ? (
          <Spinner />
        ) : (
          <div>
            <Route exact path={`${match.url}`} component={CollectionOverview} />
            <Route path={`${match.url}/:collectionid`} component={Collection} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

const state = state => ({
  getShopCollections: getShopCollections(state)
});

export default connect(
  state,
  mapDispatchToProps
)(ShopPage);
