import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/user/userSelector";
import { GlobalStyle } from "./GlobalStyles";
import Spinner from "./components/spinner/Spinner";

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const ShopPage = lazy(() => import("./pages/shop page/ShopPage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Forms = lazy(() => import("./pages/sign in/Forms"));

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() => (props.currentUser ? <Redirect to="/" /> : <Forms />)}
          />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(App);
