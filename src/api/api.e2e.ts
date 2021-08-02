const initialCharacters = [
  {
    id: 1,
    title: 'Post 1',
    img: 'https://picsum.photos/200/200/?image=11',
  },
  {
    id: 2,
    title: 'Post 2',
    img: 'https://picsum.photos/200/200/?image=22',
  },
];
let mockCharactersFromServer = [...initialCharacters];

function reset() {
  mockCharactersFromServer = [...initialCharacters];
}

async function fetchCharacters() {
  const characters = [...mockCharactersFromServer];
  return Promise.resolve(characters);
}

module.exports = {
  reset,
  fetchCharacters,
};
