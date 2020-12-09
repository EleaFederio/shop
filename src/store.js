import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducers } from './reducers/productReducers';

const initialState = {};

const composeEnhabcers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        products: productsReducers,
    }),
    initialState,
    composeEnhabcers(applyMiddleware(thunk))
);
