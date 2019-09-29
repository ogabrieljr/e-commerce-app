import React, { Component } from "react";
import Homepage from "./pages/homepage";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" render={() => <h1>HATS</h1>} />
        </Switch>
      </div>
    );
  }
}
