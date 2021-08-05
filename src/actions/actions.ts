import {Dispatch} from 'redux';
import {api} from '../api/api';
import {
  SET_IS_LOADING,
  LOAD_CHARACTER,
  LOAD_CHARACTERS,
  TOGGLE_FAVOURITE,
  LOAD_FAVOURITES,
} from './types';
import {Character} from '../reducers/charactersReducer';

export const loadCharacter = (character: Character | undefined) => ({
  type: LOAD_CHARACTER,
  payload: character,
});

export const loadCharacterList = (characters: Character[]) => ({
  type: LOAD_CHARACTERS,
  payload: characters,
});

export const loadFavouriteCharacters = (favouriteIds: string[]) => ({
  type: LOAD_FAVOURITES,
  payload: favouriteIds,
});

export const showLoadingAnimation = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const toggleFavouriteState = (selectedId: string) => ({
  type: TOGGLE_FAVOURITE,
  payload: selectedId,
});

export const toggleFavourite =
  (favouriteCharacterId: string) => async (dispatch: Dispatch) => {
    await api.toggleFavourite(favouriteCharacterId);
    dispatch(toggleFavouriteState(favouriteCharacterId));
  };

export const fetchCharacters = () => {
  return async (dispatch: Dispatch) => {
    const characters = await api.fetchAllCharacters();
    dispatch(loadCharacterList(characters));
  };
};

export const searchCharacters = (searchText: string) => {
  return async (dispatch: Dispatch) => {
    const characters = await api.searchCharacters(searchText);
    console.log(characters, 'from api');
    dispatch(loadCharacterList(characters));
  };
};

export const fetchFavouriteCharactersIds = () => {
  return async (dispatch: Dispatch) => {
    const favoriteCharacterIds = await api.fetchFavouriteIds();
    dispatch(loadFavouriteCharacters(favoriteCharacterIds));
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
