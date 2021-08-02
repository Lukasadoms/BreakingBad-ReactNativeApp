import {SET_IS_LOADING} from '../actions/types';

export interface LoadingState {
  loading: boolean;
}

const initialState = {
  loading: false,
};

export interface IsLoadingAction {
  type: typeof SET_IS_LOADING;
  payload: boolean;
}

type Action = IsLoadingAction;

export const loadingReducer = (
  state: LoadingState = initialState,
  action: Action,
): LoadingState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {loading: action.payload};
    }
    default:
      return state;
  }
};
