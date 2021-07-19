import {Navigation} from 'react-native-navigation';
import {screenIDs} from './src/screen-ids';

export function registerScreens() {
  Navigation.registerComponent(
    screenIDs.CHARACTER_LIST,
    () => require('./src/screens/characterList').characterList,
  );

  Navigation.registerComponent(
    screenIDs.CHARACTER_INFO,
    () => require('./src/screens/characterInfo').characterInfo,
  );
}
