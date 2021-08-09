import {CharacterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver} from 'react-component-driver';
import {getTextNodes, withStore} from 'redux-component-driver';
import {store} from '../store';
import {Character} from '../reducers/charactersReducer';

export const characterInfoDriver = () =>
  componentDriver(withStore(CharacterInfo, store), {
    getCharacterTitle() {
      const characterName = this.getByID(testIDs.CHARACTER_TITLE);
      return getTextNodes(characterName).join();
    },
    getCharacterImage() {
      return this.getByID(testIDs.CHARACTER_IMAGE);
    },
    getAddToFavouritesButton() {
      const node = this.getByID(testIDs.FAVOURITE_BUTTON);
      return node;
    },
    getButtonrName() {
      const addToFavouriteButton = this.getByID(testIDs.FAVOURITE_BUTTON);
      return getTextNodes(addToFavouriteButton).join();
    },
    withCharacterResponse(response: Character[]) {
      global.setMockFetchResponse(
        'https://www.breakingbadapi.com/api/characters/1',
        response,
      );
      return this;
    },
    withListResponse(response: Character[]) {
      global.setMockFetchResponse(
        'https://www.breakingbadapi.com/api/characters',
        response,
      );
      return this;
    },
    withFavoritesResponse() {
      global.setMockFetchResponse('http://localhost:3000/favourites', []);
      return this;
    },
  });
