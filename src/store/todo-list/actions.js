import store from '../../store'

const fetchDataStart = () => ({
    type: "FETCH_DATA_START"
});
const fetchDataSuccess = data => ({
    type: "FETCH_DATA_SUCCESS",
    data
});
const fetchDataError = () => ({
    type: "FETCH_DATA_ERROR"
});

export const fetchTodoList = () => {

    store.dispatch(fetchDataStart());

    return fetch('http://194.87.214.215:3000/tasks/?developer=admin', {
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