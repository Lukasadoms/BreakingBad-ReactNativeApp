import {
  LOAD_CHARACTER,
  LOAD_CHARACTERS,
  LOAD_FAVOURITES,
  TOGGLE_FAVOURITE,
} from '../actions/types';

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
  favouriteIds: string[];
}

const initialState = {
  characterList: [],
  character: undefined,
  favouriteIds: [],
};

interface LoadCharactersAction {
  type: typeof LOAD_CHARACTERS;
  payload: Character[];
}

interface LoadCharacterAction {
  type: typeof LOAD_CHARACTER;
  payload: Character | undefined;
}

interface ToggleFavourite {
  type: typeof TOGGLE_FAVOURITE;
  payload: string;
}

interface LoadFavouriteCharacters {
  type: typeof LOAD_FAVOURITES;
  payload: string[];
}

type Action =
  | LoadCharactersAction
  | LoadCharacterAction
  | ToggleFavourite
  | LoadFavouriteCharacters;

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
    case TOGGLE_FAVOURITE: {
      if (state.favouriteIds.includes(action.payload as string)) {
        return {
          ...state,
          favouriteIds: state.favouriteIds.filter(
            favouriteId => favouriteId !== action.payload,
          ),
        };
      }
      return {
        ...state,
        favouriteIds: [...state.favouriteIds, action.payload],
      };
    }
    case LOAD_FAVOURITES: {
      return {...state, favouriteIds: action.payload};
    }
    default:
      return state;
  }
};
