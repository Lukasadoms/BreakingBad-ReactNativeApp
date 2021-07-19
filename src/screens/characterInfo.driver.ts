import {characterInfo} from './characterInfo';
import {testIDs} from '../test-ids';
import {componentDriver, getTextNodes} from 'react-component-driver';

export const characterInfoDriver = () =>
  componentDriver(characterInfo, {
    getButtonTitle() {
      const node = this.filterByID(testIDs.BUTTON_TITLE);
      return getTextNodes(node).join('');
    },
  });
