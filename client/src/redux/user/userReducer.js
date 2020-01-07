const INITIAL_STATE = {
  currentUser: "",
  errorMessage: ""
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload
      };
    case "SIGN_IN_FAIL":
      return {
        ...state,
        errorMessage: action.payload
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        errorMessage: "",
        currentUser: ""
      };
    default:
      return state;
  }
};

export default userReducer;
