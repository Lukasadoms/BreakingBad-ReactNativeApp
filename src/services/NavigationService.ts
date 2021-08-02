import {Navigation} from 'react-native-navigation';

export const navigationService = {
  navigateToCharacterInfoScreen(
    componentId: string,
    screenName: string,
    characterID: string,
  ) {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        passProps: {
          characterID: characterID,
        },
        options: {
          topBar: {
            backButton: {
              color: 'black',
            },
            title: {
              text: 'Character Info',
            },
            background: {
              color: '#ffebaa',
            },
          },
        },
      },
    });
  },
};
