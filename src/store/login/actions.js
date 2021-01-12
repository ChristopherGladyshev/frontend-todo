import store from '../../store'
import {
    types
} from './types';

const fetchDataStart = () => ({
    type: types.FETCH_TOKEN_START
});
const fetchDataSuccess = data => ({
    type: types.FETCH_TOKEN_SUCCESS,
    data
});
const fetchDataError = () => ({
    type: types.FETCH_TOKEN_ERROR
});

export const fetchLogin = (username, password) => {

    store.dispatch(fetchDataStart());


    return fetch('http://194.87.214.215/login', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
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