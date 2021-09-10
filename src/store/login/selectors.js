import {
    createSelector
} from 'reselect';

export const statusLogin = createSelector(
    state => state.fatchToken,
    fatchToken => fatchToken.admin || {},
);