export const googleSignInStart = () => ({
  type: "GOOGLE_SIGN_IN_START"
});

export const signInSuccess = user => ({
  type: "SIGN_IN_SUCCESS",
  payload: user
});

export const signInFail = message => ({
  type: "SIGN_IN_FAIL",
  payload: message
});

export const emailSignInStart = emailAndPassword => ({
  type: "EMAIL_SIGN_IN_START",
  payload: emailAndPassword
});
