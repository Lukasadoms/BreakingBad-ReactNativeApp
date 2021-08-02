import {LOAD_CHARACTER, LOAD_CHARACTERS} from '../actions/types';

export interface Character {
  char_id: string;
  name: string;
  img: string;
  birthday: string;
  status: string;
  nickname: string;
  portrayed: string;
}

export interface CharacterState {
  characterList: Character[];
  character: Character | undefined;
}

const initialState = {
  characterList: [],
  character: undefined,
};

interface LoadCharactersAction {
  type: typeof LOAD_CHARACTERS;
  payload: Character[];
}

interface LoadCharacterAction {
  type: typeof LOAD_CHARACTER;
  payload: Character | undefined;
}

type Action = LoadCharactersAction | LoadCharacterAction;

export const charactersReducer = (
  state: CharacterState = initialState,
  action: Action,
): CharacterState => {
  switch (action.type) {
    case LOAD_CHARACTERS: {
      return {...state, characterList: action.payload};
    }
    case LOAD_CHARACTER: {
      return {...state, character: action.payload};
    }
    default:
      return state;
  }
};
