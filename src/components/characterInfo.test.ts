import {characterInfoDriver} from './characterInfo.driver';
import {api} from '../api/api';

describe('CharacterInfoScreen', () => {
  it('should have a character title', async () => {
    const driver = await characterInfoDriver();
    expect(driver.getCharacterTitle()).toBeDefined();
  });

  it('should have a character image', async () => {
    const driver = await characterInfoDriver();
    expect(driver.getCharacterImage()).toBeDefined();
  });

  it('should have a character like button', async () => {
    const driver = await characterInfoDriver();
    expect(driver.getAddToFavouritesButton).toBeDefined();
  });

  it('Should call api with correct characterID, when add to favourites button is pressed', async () => {
    const driver = await characterInfoDriver();
    driver.props.characterID = '1';
    const node = await driver.getAddToFavouritesButton();
    if (node) {
      node.props.onClick;
      expect(api.toggleFavourite).toHaveBeenCalledWith(
        driver.props.characterID,
      );
    }
  });
});
