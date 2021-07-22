/**
 * @format
 */

import {characterInfoDriver} from './characterInfo.driver';

describe('CharacterInfoScreen', () => {
  it('should have a character title', () => {
    expect(
      characterInfoDriver().setProps({characterID: '1'}).getCharacterTitle(),
    ).toBeDefined();
  });
});
