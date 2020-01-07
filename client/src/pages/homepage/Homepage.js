import React, { useEffect } from "react";
import Directory from "../../components/directory/Directory";
import { connect } from "react-redux";
import { fetchCartItemsStart } from "../../redux/cart/cartActions";
import { getCurrentUser } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";

function Homepage({ fetchCartItemsStart, getCurrentUser }) {
  useEffect(() => {
    if (getCurrentUser) fetchCartItemsStart();
  }, [getCurrentUser, fetchCartItemsStart]);
  return <Directory />;
}

const mapDispatchToProps = dispatch => ({
  fetchCartItemsStart: () => dispatch(fetchCartItemsStart())
});

const mapStateToProps = createStructuredSelector({
  getCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
