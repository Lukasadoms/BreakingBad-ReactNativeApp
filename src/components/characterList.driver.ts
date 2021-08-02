import {componentDriver} from 'react-component-driver/index';
import {withStore, getTextNodes} from 'redux-component-driver/index';
import {store} from '../store';
import {testIDs} from '../test-ids';
import {CharacterList} from './characterList';

export const characterListDriver = () =>
  componentDriver(withStore(CharacterList, store), {
    async getCharacterList() {
      return this.getByID(testIDs.CHARACTER_LIST);
    },
    async getCharacterName(characterID: string) {
      const character = this.filterByID(testIDs.CHARACTER_NAME(characterID));
      return getTextNodes(character).join();
    },
  }).renderAsync();
