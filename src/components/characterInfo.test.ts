import {characterInfoDriver} from './characterInfo.driver';

describe('CharacterInfoScreen', () => {
  it('should have a character title', async () => {
    const driver = await characterInfoDriver();
    expect(driver.getCharacterTitle()).toBeDefined();
  });

  it('should have a character image', async () => {
    const driver = await characterInfoDriver();
    expect(driver.getCharacterImage()).toBeDefined();
  });
});
