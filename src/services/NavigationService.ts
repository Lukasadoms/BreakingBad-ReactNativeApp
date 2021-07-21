import {Navigation} from 'react-native-navigation';

export const navigationService = {
  navigateTo(componentId: string, screenName: string, characterID: string) {
    console.log(screenName, componentId, characterID);
    Navigation.push(componentId, {
      component: {
        name: screenName,
        passProps: {
          somePropToPass: characterID,
        },
        options: {
          topBar: {
            title: {
              text: 'Character1',
            },
          },
        },
      },
    });
  },
};
