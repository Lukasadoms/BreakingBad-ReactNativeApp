import {api, MockCharacterResponse} from './api';

describe('fetch API', () => {
  it('should fetch character', async () => {
    global.setMockFetchResponse(MockCharacterResponse.character1);
    let characterList = await api.fetchAllCharacters();
    expect(characterList).toEqual(MockCharacterResponse.character1);

    global.setMockFetchResponse(MockCharacterResponse.character2);
    characterList = await api.fetchAllCharacters();
    expect(characterList).toEqual(MockCharacterResponse.character2);
  });
});
