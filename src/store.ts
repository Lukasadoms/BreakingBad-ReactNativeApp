import {combineReducers, createStore} from 'redux';
import {characterReducer} from './reducers/characterReducer';
import {loadingReducer} from './reducers/loadingReducer';

const rootReducer = combineReducers({characterReducer, loadingReducer});

export const store = createStore(rootReducer);
