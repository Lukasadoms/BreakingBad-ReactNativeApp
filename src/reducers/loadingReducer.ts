import {IS_LOADING} from '../actions/types';

export interface LoadingState {
  loading: boolean;
}

const initialState = {
  loading: false,
};

interface IsLoadingAction {
  type: typeof IS_LOADING;
  payload: boolean;
}

type Action = IsLoadingAction;

export const loadingReducer = (
  state: LoadingState = initialState,
  action: Action,
): LoadingState => {
  switch (action.type) {
    case IS_LOADING: {
      return {loading: action.payload};
    }
    default:
      return state;
  }
};
