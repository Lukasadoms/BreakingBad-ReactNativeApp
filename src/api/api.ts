export const api = {
  fetchChactacters: async () => {
    const result = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await result.json();
    return data;
  },
};
