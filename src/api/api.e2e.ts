const initialCharacters = [
  {
    id: 1,
    title: 'Post 1',
    text: 'post 1 text',
    img: 'https://picsum.photos/200/200/?image=11',
  },
  {
    id: 2,
    title: 'Post 2',
    text: 'Scientists have developed catalysts that can convert carbon dioxide – the main cause of global warming – into plastics, fabrics, resins and other products. The discovery, based on the chemistry of artificial photosynthesis, is detailed in the journal Energy & Environmental Science.',
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
