import {componentDriver} from 'react-component-driver/index';
import {withStore} from 'redux-component-driver/index';
import {store} from '../store';
import {testIDs} from '../test-ids';
import {CharacterList} from './characterList';

export const characterListDriver = () =>
  componentDriver(withStore(CharacterList, store), {
    getCharacterList() {
      return this.getByID(testIDs.CHARACTER_LIST);
    },
    getCharacterImage() {
      return this.getByID(testIDs.CHARACTER_IMAGE);
    },
  });
