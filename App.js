import React from 'react';
import { Provider } from 'react-redux';
import Router from './src/navigation';
import store from './src/redux';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
export default App;
