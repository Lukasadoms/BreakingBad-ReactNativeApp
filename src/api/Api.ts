export const api = () => {
  const fetchChactacters = () => {
    let result = await fetch('https://www.breakingbadapi.com/api/characters');
    let data = await result.json();
  };
};
