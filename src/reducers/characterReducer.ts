import {LOAD_ITEMS} from '../actions/types';

export type Character = {
  char_id: string;
  name: string;
  img: string;
  birthday: string;
  status: string;
  nickname: string;
  portrayed: string;
};

export interface CharacterState {
  characterList: Character[];
}

const initialState = {
  characterList: [
    // {
    //   char_id: '1',
    //   name: 'Walter White',
    //   img: 'img',
    //   birthday: '1964-02-21',
    //   status: 'unknown',
    //   nickname: 'Heisenberg',
    //   portrayed: 'asas',
    // },
  ],
};

interface LoadCharacterAction {
  type: typeof LOAD_ITEMS;
  payload: Character[];
}

type Action = LoadCharacterAction;

export const characterReducer = (
  state: CharacterState = initialState,
  action: Action,
): CharacterState => {
  switch (action.type) {
    case LOAD_ITEMS: {
      return {...state, characterList: action.payload};
    }
    default:
      return state;
  }
};
