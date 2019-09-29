import React, { Component } from "react";
import Homepage from "./pages/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
