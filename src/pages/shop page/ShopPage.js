import React, { Component } from "react";
import CollectionOverview from "../../components/collection overview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import { firestore } from "../../firebase/Firebase";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopActions";
import Spinner from "../../components/spinner/Spinner";

class ShopPage extends Component {
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.get().then(items => {
      const mappedItems = items.docs.map(item => {
        const { title, items } = item.data();
        return {
          title,
          items,
          id: item.id,
          routeName: encodeURI(title.toLowerCase())
        };
      });
      const reducedItems = mappedItems.reduce((acc, items) => {
        acc[items.title.toLowerCase()] = items;
        return acc;
      }, {});
      this.props.updateCollections(reducedItems);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {this.props.collections === "" ? (
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
  updateCollections: collections => dispatch(updateCollections(collections))
});

const state = state => ({
  collections: state.shopReducer.collections
});

export default connect(
  state,
  mapDispatchToProps
)(ShopPage);
