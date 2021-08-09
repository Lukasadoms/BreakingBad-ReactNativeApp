/*This is the class that defines your module.
  For full documentation, see here: https://bo.wix.com/one-app-engine-docs#/module-api
  */

// NOTICE - no imports in this file! Any external code is required on demand.

export default class BreakingBadModule {
  // returns an array of components that your module provides
  // [{id: string, generator: () => Component, description: string}]
  components() {
    return [
      {
        id: 'one-app-breakingBadApp.characterInfo',
        generator: () => require('./components/characterInfo').default,
        description: 'Screen to show when clicker on character',
      },
      {
        id: 'one-app-breakingBadApp.characterList',
        generator: () => require('./components/characterList').default,
        description: 'Screen to show as root',
      },
    ];
  }

  // returns an array of methods that your module provides
  // [{id: string, generator: () => function, description: string}]
  methods() {
    return [];
  }

  // returns a string that will be used as a prefix for your module's exports
  prefix() {
    return 'one-app-breakingBadApp';
  }

  onLogin() {}

  onLogout() {}

  onAppSwitchToBackground() {}

  onAppSwitchToForeground() {}

  clientApps(business) {
    // In a real module, you need to first check that the user has this service enabled for the current business
    return [];
  }

  managerApps(business) {
    // In a real module, you need to first check that the user has this service enabled for the current business
    return [];
  }
}
