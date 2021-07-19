/**
 * @format
 */

import {showAlert} from './characterInfo';
import {characterInfoDriver} from './characterInfo.driver';

it('should return 5', () => {
  expect(showAlert()).toEqual(5);
});

it('should have button with title Alert', () => {
  expect(characterInfoDriver().getButtonTitle()).toEqual('Character Info');
});
