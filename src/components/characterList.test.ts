import {characterListDriver} from './characterList.driver';
import {MockCharacterResponse} from '../api/apiMock';

describe('Character list screen', () => {
  it('should have a character list', async () => {
    const driver = await characterListDriver();
    const characters = driver.getCharacterList();
    expect(characters).toBeDefined();
  });

  it('character 1 should be "Walter White"', async () => {
    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters',
      MockCharacterResponse.character1,
    );
    global.setMockFetchResponse('http://localhost:3000/favourites', []);
    const driver = await characterListDriver();
    const characterName = driver.getCharacterName('1');
    expect(characterName).toEqual('Walter White');
  });

  it('character 2 should be "Skyler White"', async () => {
    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters',
      MockCharacterResponse.character2,
    );
    global.setMockFetchResponse('http://localhost:3000/favourites', []);
    const driver = await characterListDriver();
    // driver.withFavoritesResponse();
    // driver.withListResponse(MockCharacterResponse.character2);
    const characterName = driver.getCharacterName('2');
    expect(characterName).toEqual('Skyler White');
  });

  it('SHould have a search text field', async () => {
    const driver = await characterListDriver();
    expect(driver.getSearchField()).toBeDefined();
  });

  it('Should filter results with given text', async () => {
    global.setMockFetchResponse('http://localhost:3000/favourites', []);
    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters?name=Skyler+White',
      MockCharacterResponse.character2,
    );
    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters',
      MockCharacterResponse.all,
    );
    const driver = await characterListDriver();
    // driver.withSearchResponse(MockCharacterResponse.character2);
    // driver.withListResponse(MockCharacterResponse.all);
    // driver.withFavoritesResponse();
    expect(driver.getCharacterNameList()).toHaveLength(2);
    driver.searchFor('Skyler White');
    await flushPromises();
    expect(driver.getCharacterNameList()).toHaveLength(1);
    expect(driver.getCharacterNameList()[0]).toEqual('Skyler White');
  });
});

const flushPromises = () => new Promise(resolve => setTimeout(resolve, 1000));
