import store from '../../store'
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

export const fetchTodoList = () => {

    store.dispatch(fetchDataStart());

    return fetch('http://194.87.239.49/api/tasks/?developer=admin', {
            method: 'GET',
            mode: "cors",
        })
        .then((response) => response.json())
        .then((data) => {
             store.dispatch(fetchDataSuccess(data));
             return data;
        })
        .catch(error => {
            store.dispatch(fetchDataError(error));
            return Promise.reject(error);
        });
};