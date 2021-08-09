import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';

export function withProvider<Props>(Component: React.ComponentType<Props>) {
  return (props: Props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}
