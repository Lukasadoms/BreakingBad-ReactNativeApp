import {CharacterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver} from 'react-component-driver';

export const characterInfoDriver = () =>
  componentDriver(CharacterInfo, {
    getButton() {
      return this.getByID(testIDs.BUTTON_TITLE);
    },
  });
