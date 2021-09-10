import { types } from './types';

const initialState = {
    todoList: [{
        status: null,
        message: {
            tasks: []
        }

    }],
};

export default function fatchTasks(state = initialState, action) {
    const { type, data, error } = action;
    switch (type) {
        case types.FETCH_DATA_START:
            return {
                ...state,
                todoList: [...initialState.todoList],
            };

        case types.FETCH_DATA_SUCCESS:

            return {
                ...state,
                todoList: data,
            };

        case types.FETCH_DATA_ERROR:
            return {
                ...state,
                error: error,
            };

        default:
            return {
                ...state,
            };
    }
}