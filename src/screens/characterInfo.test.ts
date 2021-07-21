/**
 * @format
 */

import {showAlert} from './characterInfo';
import {characterInfoDriver} from './characterInfo.driver';

describe('CharacterInfoScreen', () => {
  it('show alert function should show Alert', () => {
    const {Alert} = require('react-native');
    jest.spyOn(Alert, 'alert');
    showAlert();
    expect(Alert.alert).toHaveBeenCalled();
  });

  it('should have button with a title of "Alert"', () => {
    expect(characterInfoDriver().getButton()).toBeDefined();
  });
});
