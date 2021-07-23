import {characterListDriver} from './characterList.driver';
import {api} from '../api/api';

describe('Character list screen', () => {
  it('should have a character list', async () => {
    const driver = await characterListDriver();
    expect(driver.getCharacterList()).toBeDefined();
  });

  it('every character list item should have character name', async () => {
    const driver = await characterListDriver();
    expect(driver.getCharacterName()).toBeDefined();
  });
});
