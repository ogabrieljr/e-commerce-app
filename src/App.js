import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import "./app.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
