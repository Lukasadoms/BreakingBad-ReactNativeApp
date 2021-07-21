import {Navigation} from 'react-native-navigation';
import {screenIDs} from './screen-ids';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';
import {CharacterListProps} from './components/characterList';
import {CharacterInfoProps} from './components/characterInfo';

export function withProvider<Props>(Component: React.ComponentType<Props>) {
  return (props: Props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

// const withProvider<Props> = (Component: React.ComponentType<Props>) => (props: Props) =>
//   (
//     <Provider store={store}>
//       <Component {...props} />
//     </Provider>
//   );

export function registerScreens() {
  Navigation.registerComponent(screenIDs.CHARACTER_LIST, () =>
    withProvider<CharacterListProps>(
      require('./components/characterList').CharacterList,
    ),
  );

  Navigation.registerComponent(screenIDs.CHARACTER_INFO, () =>
    withProvider<CharacterInfoProps>(
      require('./components/characterInfo').CharacterInfo,
    ),
  );
}
