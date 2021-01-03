import {
    createSelector
} from 'reselect';

export const statusList = createSelector(
    state => state.fatchTasks,
    fatchTasks => fatchTasks.todoList || {
        status: null,
        message: {
            tasks: []
        }
    },
);