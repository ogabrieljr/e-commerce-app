import React from "react";
import "./app.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop page/ShopPage";
import Header from "./components/header/Header";
import Form from "./pages/form/Form";
import { connect } from "react-redux";
import Checkout from "./pages/checkout/Checkout";
import { getCurrentUser } from "./redux/user/userSelector";

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() => (props.currentUser ? <Redirect to="/" /> : <Form />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(App);
