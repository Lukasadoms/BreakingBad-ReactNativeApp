import {characterInfoDriver} from './characterInfo.driver';
import {api} from '../api/api';
import {MockCharacterResponse} from '../api/apiMock';

describe('CharacterInfoScreen', () => {
  it('should have a character title', async () => {
    const driver = await characterInfoDriver()
      .setProps({characterID: '1'})
      .withCharacterResponse(MockCharacterResponse.character1)
      .withFavoritesResponse()
      .renderAsync();
    expect(driver.getCharacterTitle()).toEqual('Walter White');
  });

  it('should have a character image', async () => {
    const driver = await characterInfoDriver()
      .setProps({characterID: '1'})
      .withCharacterResponse(MockCharacterResponse.character1)
      .withFavoritesResponse()
      .renderAsync();
    expect(driver.getCharacterImage()).toBeDefined();
  });

  it('should have a character add to favourites button', async () => {
    const driver = await characterInfoDriver()
      .setProps({characterID: '1'})
      .withCharacterResponse(MockCharacterResponse.character1)
      .withFavoritesResponse()
      .renderAsync();
    expect(driver.getAddToFavouritesButton()).toBeDefined();
  });

  it('Should call api with correct characterID, when add to favourites button is pressed', async () => {
    jest.spyOn(api, 'toggleFavourite');
    const driver = await characterInfoDriver()
      .withCharacterResponse(MockCharacterResponse.character1)
      .withListResponse(MockCharacterResponse.all)
      .withFavoritesResponse()
      .setProps({characterID: '1'})
      .renderAsync();
    const node = driver.getAddToFavouritesButton();
    if (node) {
      node.props.onClick();
      expect(api.toggleFavourite).toHaveBeenCalledWith(
        driver.props.characterID,
      );
    }
  });
});
