/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import {screenIDs} from './src/screen-ids';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: screenIDs.CHARACTER_LIST,
              options: {
                topBar: {
                  title: {
                    text: 'BreakingBad',
                  },
                  background: {
                    color: '#ffebaa',
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
