import MockTools from 'wix-one-app-engine/lib/MockTools';

export default class DemoModule {
  prefix() {
    return 'demo-module';
  }

  async __unsafe__initializeDemoModule() {
    const mockMode = MockTools.getLoginMode();
    switch (mockMode) {
      case 'quickLogin':
        MockTools.setLoginData({
          loginCredentials: {
            email: 'julie@example.com',
            password: '123456',
          },
        });
        break;
      default:
        console.warn('Unhandled mock mode: ' + mockMode);
    }
  }

  components() {
    return [];
  }

  methods() {
    return [];
  }
}
