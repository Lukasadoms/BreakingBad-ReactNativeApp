export const api = {
  fetchAllCharacters: async () => {
    const result = await fetch('https://www.breakingbadapi.com/api/characters');
    return await result.json();
  },

  fetchCharacter: async (characterID: string) => {
    const result = await fetch(
      `https://www.breakingbadapi.com/api/characters/${characterID}`,
    );
    return await result.json();
  },
};

export const MockCharacterResponse = {
  character1: [
    {
      char_id: '1',
      name: 'Walter White',
      img: 'image',
      birthday: 'unknown',
      status: 'unknown',
      nickname: 'Heisenberg',
      portrayed: 'unknown',
    },
  ],
  character2: [
    {
      char_id: '2',
      name: 'Skyler White',
      img: 'image',
      birthday: 'unknown',
      status: 'unknown',
      nickname: 'unknown',
      portrayed: 'unknown',
    },
  ],
};
