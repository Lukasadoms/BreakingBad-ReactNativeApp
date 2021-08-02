import {applyMiddleware, combineReducers, createStore} from 'redux';
import {charactersReducer} from './reducers/charactersReducer';
import {loadingReducer} from './reducers/loadingReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  characterReducer: charactersReducer,
  loadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
