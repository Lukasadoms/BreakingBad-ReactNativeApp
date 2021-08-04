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

  fetchFavouriteIds: async () => {
    const response = await fetch('http://localhost:3000/favourites');
    return await response.json();
  },

  toggleFavourite: async (favouriteId: string) => {
    return await fetch('http://localhost:3000/favourites', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selectedId: favouriteId}),
    });
  },
};
