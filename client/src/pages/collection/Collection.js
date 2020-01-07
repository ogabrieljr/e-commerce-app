import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/collection item/CollectionItem";
import "./style.scss";

function Collection({ selectCollection }) {
  const { title, items } = selectCollection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  selectCollection: selectCollection(props.match.params.collectionid)(state)
});

export default connect(mapStateToProps)(Collection);
