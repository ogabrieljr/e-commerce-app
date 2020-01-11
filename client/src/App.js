import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/user/userSelector";
import { GlobalStyle } from "./GlobalStyles";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error boundary/ErrorBoundary";

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const ShopPage = lazy(() => import("./pages/shop page/ShopPage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Forms = lazy(() => import("./pages/sign in/Forms"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/signin"
              render={() => (props.currentUser ? <Redirect to="/" /> : <Forms />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  );
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(App);
