import { createSelector } from "reselect";

export const getFriendSelector = createSelector(
  (state: any) => state,
  (state) => state.sideBar.friendsData
);
export const getInitializedSelector = createSelector(
  (state: any) => state,
  (state) => state.sliceApp.initialized
);
