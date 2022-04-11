
import {createSelector} from 'reselect';

export const getUsersSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceUsers.users,
);
export const a = createSelector(
    (state: any) => state,
    (state) => state.sliceUsers,
);
export const getIsLoginSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceUsers.isLogin,
);