const INITIAL_STATE = {
  currentUser: null,
  errorMessage: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GOOGLE_SIGN_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload
      };
    case "GOOGLE_SIGN_IN_FAIL":
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
