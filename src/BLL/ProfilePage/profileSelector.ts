
import {createSelector} from 'reselect';

export const getSliceProfileSelector = createSelector(
    (state: any) => state,
    (state) => state.sliceProfile,
);
