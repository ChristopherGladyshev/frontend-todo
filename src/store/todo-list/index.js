import {
    types
} from './types';

const initialState = {
    todoList: [{
        status: null
    }],
};

export default function fatchModal(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_DATA_START:
            return {
                ...state,
                todoList: [...initialState.todoList],
            };

        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                todoList: action.data,
            };

        case types.FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return {
                ...state,
                todoList: [...initialState.todoList],
            };
    }
}