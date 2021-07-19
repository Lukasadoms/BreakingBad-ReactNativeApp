import {device} from "detox"

describe('Example', () => {
  beforeAll(async () => {
    await device.selectApp("default")
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have character list', async () => {
    await expect(element(by.id('character-list'))).toBeVisible();
  });

  it('should show character info screen after tapping character list', async () => {
    await element(by.id('character-list')).tap();
    await expect(element(by.id('character-info'))).toBeVisible();
  });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
