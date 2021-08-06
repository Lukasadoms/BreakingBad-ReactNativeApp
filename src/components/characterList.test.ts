import {characterListDriver} from './characterList.driver';
import {MockCharacterResponse} from '../api/apiMock';

describe('Character list screen', () => {
  it('should have a character list', () => {
    const driver = characterListDriver();
    const characters = driver.getCharacterList();
    expect(characters).toBeDefined();
  });

  it('character 1 should be "Walter White"', async () => {
    const driver = await characterListDriver()
      .withListResponse(MockCharacterResponse.character1)
      .withFavoritesResponse()
      .renderAsync();
    const characterName = driver.getCharacterName('1');
    expect(characterName).toEqual('Walter White');
  });

  it('character 2 should be "Skyler White"', async () => {
    const driver = await characterListDriver()
      .withListResponse(MockCharacterResponse.character2)
      .withFavoritesResponse()
      .renderAsync();
    const characterName = driver.getCharacterName('2');
    expect(characterName).toEqual('Skyler White');
  });

  it('Should have a search text field', () => {
    const driver = characterListDriver();
    expect(driver.getSearchField()).toBeDefined();
  });

  it('Should filter results with given text', async () => {
    const driver = await characterListDriver()
      .withSearchResponse(MockCharacterResponse.character2)
      .withListResponse(MockCharacterResponse.all)
      .withFavoritesResponse()
      .renderAsync();
    expect(driver.getCharacterNameList()).toHaveLength(2);
    driver.searchFor('Skyler White');
    await flushPromises();
    expect(driver.getCharacterNameList()).toHaveLength(1);
    expect(driver.getCharacterNameList()[0]).toEqual('Skyler White');
  });
});

const flushPromises = () => new Promise(resolve => setImmediate(resolve));
