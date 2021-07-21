import {CharacterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver} from 'react-component-driver';
import {withProvider} from '../screens';

export const characterInfoDriver = () =>
  componentDriver(withProvider(CharacterInfo), {
    getCharacterTitle() {
      return this.getByID(testIDs.CHARACTER_TITLE);
    },
  });
