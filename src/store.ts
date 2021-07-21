import {createStore} from 'redux';
import {characterReducer} from './reducers/characterReducer';

export const store = createStore(characterReducer);
