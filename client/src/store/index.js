import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducer';

let store;

export function configureStore() {
    store = createStore(reducer, applyMiddleware(thunk, logger));
    return store;
}