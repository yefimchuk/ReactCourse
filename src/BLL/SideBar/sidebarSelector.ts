import { createSelector } from "reselect";

export const getFriendsSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceSidebar.friendsData
);
