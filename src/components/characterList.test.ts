import {characterListDriver} from './characterList.driver';
import {MockCharacterResponse} from '../api/apiMock';

describe('Character list screen', () => {
  it('should have a character list', async () => {
    const driver = await characterListDriver();
    const characters = driver.getCharacterList();
    expect(characters).toBeDefined();
  });

  it('character 1 should be "Walter White"', async () => {
    global.setMockFetchResponse(MockCharacterResponse.character1);
    const driver = await characterListDriver();
    const characterName = driver.getCharacterName('1');
    expect(characterName).toEqual('Walter White');
  });

  it('character 2 should be "Skyler White"', async () => {
    global.setMockFetchResponse(MockCharacterResponse.character2);
    const driver = await characterListDriver();
    const characterName = driver.getCharacterName('2');
    expect(characterName).toEqual('Skyler White');
  });
});
