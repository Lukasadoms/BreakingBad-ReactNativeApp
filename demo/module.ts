import MockTools from 'wix-one-app-engine/lib/MockTools';
import OneAppStateBuilder from 'wix-one-app-engine/lib/OneAppStateBuilder';

export default class DemoModule {
  prefix() {
    return 'demo-module';
  }
  _mockProduction() {
    MockTools.setLoginDataFromLocalConfigFile();
  }
  _mockMockState() {
    const oneAppState = new OneAppStateBuilder()
      .withUserId(1234)
      .withBusiness('MetaSiteId1', 'Site1', true, 'exampleService1')
      .withBusiness('MetaSiteId2', 'Site2', false, 'exampleService1')
      .withBusinessService('MetaSiteId2', 'exampleService2')
      .build();

    MockTools.setLoginData({
      oneAppState,
    });
  }

  components() {
    return [];
  }

  methods() {
    return [];
  }
}
