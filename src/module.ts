/*This is the class that defines your module.
  For full documentation, see here: https://bo.wix.com/one-app-engine-docs#/module-api
  */

// NOTICE - no imports in this file! Any external code is required on demand.

const widgets = [
  {
    id: 'one-app-breakingBadApp.character-list-widget',
    displayName: 'Breaking Bad Characters',
    title: {
      text: 'Breaking bad character list',
    },
    componentId: 'one-app-breakingBadApp.BreakingBadAppWidget',
    startLoadingComponent: () => {
      return new Promise(resolve => {
        setImmediate(resolve);
      });
    },
    ctaArray: [
      {
        id: 'push_character_list_screen',
        title: 'View list',
        actionType: 'component',
        actionPayload: {
          transition: 'push',
          componentId: require('./screen-ids').screenIDs.CHARACTER_LIST,
        },
      },
    ],
  },
];

export default class BreakingBadModule {
  consumedServices() {
    return {
      'wix.platform.dashboardWidgetsService': widgets,
    };
  }
  components() {
    return [
      {
        id: 'one-app-breakingBadApp.BreakingBadAppWidget',
        generator: () => require('./components/BreakingBadAppWidget').default,
        description: 'Breaking Bad App Widget',
      },
      {
        id: 'one-app-breakingBadApp.characterInfo',
        generator: () =>
          require('./screens').withProvider(
            require('./components/characterInfo').default,
          ),
      },
      {
        id: 'one-app-breakingBadApp.characterList',
        generator: () =>
          require('./screens').withProvider(
            require('./components/characterList').default,
          ),
        description: 'Screen to show as root',
      },
    ];
  }

  // returns a string that will be used as a prefix for your module's exports
  prefix() {
    return 'one-app-breakingBadApp';
  }
}
