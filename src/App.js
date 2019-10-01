import React, { Component } from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import Form from "./pages/form/Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Form} />
        </Switch>
      </div>
    );
  }
}
