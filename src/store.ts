import {combineReducers, createStore} from 'redux';
import {charactersReducer} from './reducers/charactersReducer';
import {loadingReducer} from './reducers/loadingReducer';

const rootReducer = combineReducers({
  characterReducer: charactersReducer,
  loadingReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
