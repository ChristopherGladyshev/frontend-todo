import { types } from './types';

const fetchDataStart = () => ({
    type: types.FETCH_DATA_START
});
const fetchDataSuccess = data => ({
    type: types.FETCH_DATA_SUCCESS,
    data
});
const fetchDataError = () => ({
    type: types.FETCH_DATA_ERROR
});

export const fetchTodoList = () => dispatch => {

    dispatch(fetchDataStart());

    return fetch('http://194.87.214.215:3000/tasks/?developer=admin', {
            method: "GET",
        })
        .then((data = []) => {
            dispatch(fetchDataSuccess(data));
            return data;
        })
        .catch(error => {
            dispatch(fetchDataError(error));
            return Promise.reject(error);
        });
};