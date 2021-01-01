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

export const fetchTodoList = (name) =>{

    fetchDataStart();
    

    return fetch('http://194.87.214.215:3000/tasks/',{
        method: 'GET',
        mode: "cors",
    })
        .then((data) => {
            console.log(data)
            fetchDataSuccess(data);
            return data;
        })
        .catch(error => {
            fetchDataError(error);
            return Promise.reject(error);
        });
};