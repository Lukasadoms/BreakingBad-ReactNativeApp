export const api = {
  fetchAllChactacters: async () => {
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
