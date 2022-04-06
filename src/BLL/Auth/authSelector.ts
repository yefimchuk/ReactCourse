import {createSelector} from 'reselect';

export const getAuthIdSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceAuth.id,
);

export const getAuthIsLoginSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceAuth.isLogin
);
export const getAuthDateSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceAuth.date,
);
