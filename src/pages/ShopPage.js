import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../components/preview collection/PreviewCollection";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
