import React from 'react';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './src/navigation';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <MenuProvider>
      <Router />
    </MenuProvider>
  </Provider>
);
export default App;
