import {characterListDriver} from './characterList.driver';
import {MockCharacterResponse} from '../api/api';

describe('Character list screen', () => {
  it('should have a character list', async () => {
    const driver = await characterListDriver();
    const characters = driver.getCharacterList();
    expect(characters).toBeDefined();
  });

  it('character 1 should be "Walter White"', async () => {
    // set fetch mock
    global.setMockFetchResponse(MockCharacterResponse.character1);
    const driver = await characterListDriver();
    const character = await driver.getCharacterName('1');
    expect(character[0]).toEqual('Walter White');
  });

  it('character 2 should be "Skyler White"', async () => {
    // set fetch mock
    global.setMockFetchResponse(MockCharacterResponse.character2);
    const driver = await characterListDriver();
    const character = await driver.getCharacterName('2');
    expect(character[0]).toEqual('Skyler White');
  });
});
