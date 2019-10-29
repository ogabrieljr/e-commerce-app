import React, { Component } from "react";
import "./app.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import Form from "./pages/form/Form";
import {
  auth,
  createUserProfileDocument,
  addCollectionToFirebase
} from "./firebase/Firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import Checkout from "./pages/checkout/Checkout";
import { getCurrentUser } from "./redux/user/userSelector";
import { collectionValues } from "./redux/shop/shopSelector";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const collectionToFirebase = this.props.collectionValues.map(item => ({
      title: item.title,
      items: item.items
    }));

    addCollectionToFirebase("collection", collectionToFirebase);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async currentUser => {
      if (currentUser) {
        const userRef = await createUserProfileDocument(currentUser);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else this.props.setCurrentUser(currentUser);
    });
  }

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
  currentUser: getCurrentUser(state),
  collectionValues: collectionValues(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
