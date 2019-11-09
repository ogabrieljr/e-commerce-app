import React, { Component } from "react";
import "./app.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import Form from "./pages/form/Form";
import { connect } from "react-redux";
import Checkout from "./pages/checkout/Checkout";
import { getCurrentUser } from "./redux/user/userSelector";

class App extends Component {
  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async currentUser => {
  //     if (currentUser) {
  //       const userRef = await createUserProfileDocument(currentUser);
  //       userRef.onSnapshot(snapShot => {
  //         this.props.setCurrentUser({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         });
  //       });
  //     } else this.props.setCurrentUser(currentUser);
  //   });
  // }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <Form />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(App);
