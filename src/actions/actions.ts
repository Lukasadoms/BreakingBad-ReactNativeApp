import {Dispatch} from 'redux';
import {api} from '../api/api';
import {SET_IS_LOADING, LOAD_CHARACTER, LOAD_CHARACTERS} from './types';
import {Character} from '../reducers/charactersReducer';

export const loadCharacter = (character: Character | undefined) => ({
  type: LOAD_CHARACTER,
  payload: character,
});

export const loadCharacterList = (characters: Character[]) => ({
  type: LOAD_CHARACTERS,
  payload: characters,
});

export const showLoadingAnimation = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const fetchCharacters = () => {
  return async (dispatch: Dispatch) => {
    const characters = await api.fetchAllCharacters();
    console.log(characters);
    dispatch(loadCharacterList(characters));
  };
};

export const fetchCharacterInfo = (characterID: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(showLoadingAnimation(true));
    api
      .fetchCharacter(characterID)
      .then(data => dispatch(loadCharacter(data[0])))
      .then(() => dispatch(showLoadingAnimation(false)));
  };
};
