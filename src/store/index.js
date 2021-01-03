import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import fatchTasks from './todo-list';
import fatchToken from './login';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const rootReducer = combineReducers({
    fatchTasks,
    fatchToken
});



const configureStore = preloadedState => (
    createStore(
        rootReducer,
        compose(applyMiddleware(thunk), composeEnhancers()),
    )
);

const store = configureStore({});

export default store;