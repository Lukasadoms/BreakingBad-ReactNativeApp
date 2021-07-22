import {CharacterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver} from 'react-component-driver';
import {withStore} from 'redux-component-driver';
import {store} from '../store';

export const characterInfoDriver = () =>
  componentDriver(withStore(CharacterInfo, store), {
    // withCharacter(characterInfo: Character) {
    //   store.dispatch({type: '', characters: [characterInfo]});
    // },
    getCharacterTitle() {
      return this.getByID(testIDs.CHARACTER_TITLE);
    },
  });
