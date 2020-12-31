import { createSelector } from 'reselect';

export const status = createSelector(
    state => state.todoList,
    todoList => todoList || {},
);