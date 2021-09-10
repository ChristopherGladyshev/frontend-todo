import {
    createTypes,
} from 'redux-action-types';

export const types = createTypes('',
    'FETCH_DATA_START', 
    'FETCH_DATA_SUCCESS', 
    'FETCH_DATA_ERROR',
);


export default types