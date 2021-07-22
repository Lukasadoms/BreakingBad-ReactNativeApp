import {characterListDriver} from './characterList.driver';

beforeAll(() => {
  const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({json: () => Promise.resolve([])}),
    );
});

describe('Character list screen', () => {
  it('should have a character list', () => {
    expect(characterListDriver().getCharacterList()).toBeDefined();
  });
  it('every character list item should have character image', () => {
    expect(characterListDriver().getCharacterImage()).toBeDefined();
  });
});
