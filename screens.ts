import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'CharacterList',
    () => require('./src/screens/characterList').default,
  );

  Navigation.registerComponent(
    'CharacterInfo',
    () => require('./src/screens/characterInfo').default,
  );
}
