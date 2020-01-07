const INITIAL_STATE = {
  collections: "",
  errorMessage: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return { ...state };
    case "FETCH_COLLECTIONS_SUCCESS":
      return { ...state, collections: action.payload };
    case "FETCH_COLLECTIONS_FAIL":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
