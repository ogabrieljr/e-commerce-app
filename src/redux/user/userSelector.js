import { createSelector } from "reselect";

const userState = state => state.userReducer;

export const getCurrentUser = createSelector(
  [userState],
  user => user.currentUser
);
