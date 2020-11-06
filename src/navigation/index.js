import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login } from '../views';


const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const router = createSwitchNavigator(
  {
    AuthStack
  },
  {
    initialRouteName: 'AuthStack',
  },
);

const AppContainer = createAppContainer(router);

export default () => <AppContainer />;
