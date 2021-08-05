import {CharacterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver} from 'react-component-driver';
import {withStore} from 'redux-component-driver';
import {store} from '../store';

export const characterInfoDriver = () =>
  componentDriver(withStore(CharacterInfo, store), {
    async getCharacterTitle() {
      return this.getByID(testIDs.CHARACTER_TITLE);
    },
    async getCharacterImage() {
      return this.getByID(testIDs.CHARACTER_IMAGE);
    },
    async getAddToFavouritesButton() {
      return this.getByID(testIDs.FAVOURITE_BUTTON);
    },
  }).renderAsync();
