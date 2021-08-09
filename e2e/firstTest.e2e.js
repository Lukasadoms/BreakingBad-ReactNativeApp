import {device} from 'detox';
import {testIDs} from '../src/test-ids';

describe('Example', () => {
  beforeAll(async () => {
    await device.selectApp('default');
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have character list', async () => {
    await expect(element(by.id(testIDs.CHARACTER_LIST))).toBeVisible();
  });

  it('should show character info screen after tapping character list', async () => {
    await element(by.id(testIDs.CHARACTER_LIST)).tap();
    await expect(element(by.id(testIDs.CHARACTER_TITLE))).toBeVisible();
  });

  it('should show Skyler White list item after inputing Walter White in search field', async () => {
    await element(by.id(testIDs.SEARCH_FIELD)).typeText('Skyler');
    await expect(element(by.text('Skyler White'))).toBeVisible();
  });

  it('should toggle the add to favourites button text', async () => {
    await element(by.id(testIDs.CHARACTER_LIST)).tap();
    await expect(element(by.id(testIDs.FAVOURITE_BUTTON))).toBeVisible();
    await element(by.id(testIDs.FAVOURITE_BUTTON)).tap();
    await expect(element(by.text('Remove from favourites'))).toBeVisible();
    await element(by.id(testIDs.FAVOURITE_BUTTON)).tap();
    await expect(element(by.text('Add to favourites'))).toBeVisible();
  });
});
