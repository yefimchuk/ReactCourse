import { createSelector } from "reselect";

const selectSelf = (state: object) => state;
export const messageDataSelector = createSelector(
  selectSelf,
  (state: any) => state.sliceMessage.messageData
);
export const dialogsDataSelector = createSelector(
  selectSelf,
  (state: any) => state.sliceMessage.dialogsData
);
