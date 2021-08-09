import {api} from './api';
import {MockCharacterResponse} from './apiMock';

describe('fetch API', () => {
  it('should fetch character', async () => {
    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters',
      MockCharacterResponse.character1,
    );
    let characterList = await api.fetchAllCharacters();
    expect(characterList).toEqual(MockCharacterResponse.character1);

    global.setMockFetchResponse(
      'https://www.breakingbadapi.com/api/characters',
      MockCharacterResponse.character2,
    );
    characterList = await api.fetchAllCharacters();
    expect(characterList).toEqual(MockCharacterResponse.character2);
  });
});
