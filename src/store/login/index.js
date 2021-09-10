import { types } from './types';

const initialState = {
    admin: [
        {
            token: null
        }
    ],
};

export default function fatchToken(state = initialState, action) {

    const { type, data, error } = action;
    
    switch (type) {
        case types.FETCH_TOKEN_START:
            return {
                ...state,
                admin: [...initialState.admin],
            };

        case types.FETCH_TOKEN_SUCCESS:

            return {
                ...state,
                admin: data,
            };

        case types.FETCH_TOKEN_ERROR:
            return {
                error: error,
            };

        default:
            return {
                ...state,
                admin: [...initialState.admin]
            };
    }
}