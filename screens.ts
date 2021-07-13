import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'CharacterList',
    () => require('./src/screens/CharacterList').default,
  );

  Navigation.registerComponent(
    'CharacterInfo',
    () => require('./src/screens/CharacterInfo').default,
  );
}
