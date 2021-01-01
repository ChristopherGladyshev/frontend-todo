import { types } from './types';

const initialState = {
    todoList: [{
        status: null
    }],
};

export default function fatchTasks(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_DATA_START:
            console.log(1)
            return {
                ...state,
                todoList: [...initialState.todoList],
            };

        case types.FETCH_DATA_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                todoList: action.data,
            };

        case types.FETCH_DATA_ERROR:
            console.log(2)
            return {
                ...state,
                error: action.error,
            };

        default:
            return {
                ...state,
            };
    }
}