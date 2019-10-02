import React, { Component } from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import Form from "./pages/form/Form";
import { auth } from "./firebase/Firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      //console.log(currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Form} />
        </Switch>
      </div>
    );
  }
}
