import { createSelector } from "reselect";

const directoryState = state => state.directoryReducer;

export const geSections = createSelector(
  [directoryState],
  directory => directory.sections
);
