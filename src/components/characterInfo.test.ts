/**
 * @format
 */

import {characterInfoDriver} from './characterInfo.driver';

describe('CharacterInfoScreen', () => {
  it('character title should be defined', () => {
    expect(characterInfoDriver().getCharacterTitle()).toBeDefined();
  });
});
