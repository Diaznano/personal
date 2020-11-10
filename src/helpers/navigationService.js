import { NavigationActions, StackActions } from 'react-navigation';

import store from '../redux/index';
import LocalStorageService from './localStorageService';
import { setAuthorizationToken } from '../api/config';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

async function navigateAndReset() {
  store.dispatch({ type: 'RESET_APP' });

  await LocalStorageService.clearToken();
  setAuthorizationToken('');
  const resetAction = StackActions.reset({
    index: 0,
    key: 'AuthStack',
    actions: [
      NavigationActions.navigate({
        key: 'AuthStack',
        routeName: 'Login',
        params: { resetApp: true },
      }),
    ],
  });
  navigator.dispatch(resetAction);
}

function getCurrentRoute() {
  let route = navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
}

export default {
  setTopLevelNavigator,
  navigateAndReset,
  getCurrentRoute,
};
