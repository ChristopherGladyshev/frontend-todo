import {
    createTypes,
} from 'redux-action-types';

export const types = createTypes('',
    'FETCH_TOKEN_START', 
    'FETCH_TOKEN_SUCCESS', 
    'FETCH_TOKEN_ERROR',
);


export default types