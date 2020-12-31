import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fatchTodoList from './todo-list';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */



const configureStore = preloadedState => (
    createStore(
        
        fatchTodoList,
        compose(applyMiddleware(thunk), composeEnhancers()),
    )
);

const store = configureStore({});

export default store;