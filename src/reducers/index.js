//applyMiddleware: with the help of this component provided by redux the above middleware’s can be bound to the application.
//compose: is used when multiple store components needs to be applied to increase the functionality of the store it self such as the redux-thunk & redux-logger.

import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import serviceReducer from './listreducer'

const AppReducers = combineReducers({
    serviceReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

const logger = createLogger();

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;