import {api} from './api';

it('should fetch character list', async () => {
  const characterList = await api.fetchAllChactacters();
  expect(characterList).toBeDefined();
  expect(characterList).toEqual([
    {
      char_id: '1',
      name: 'Walter White',
      img: 'image',
      birthday: '1990',
      status: 'unknown',
      nickname: 'Heisenberg',
      portrayed: 'dontknow',
    },
  ]);
});
