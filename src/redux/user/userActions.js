export const googleSignInStart = () => ({
  type: "GOOGLE_SIGN_IN_START"
});

export const googleSignInSuccess = user => {
  console.log(user)
  return {
    type: "GOOGLE_SIGN_IN_SUCCESS",
    payload: user
  };
};

export const googleSignInFail = message => ({
  type: "GOOGLE_SIGN_IN_FAIL",
  payload: message
});
