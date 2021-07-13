/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'CharacterList',
              options: {
                topBar: {
                  title: {
                    text: 'BreakingBad',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
