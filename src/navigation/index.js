import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import colors from '../assets/colors';
import { Login, Currency } from '../views';
import clientBottomRoutes from './clientBottomRoutes';
import adminBottomRoutes from './adminBottomRoutes';

const tabBaseConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.WHITE,
    indicatorStyle: {
      top: 0,
      backgroundColor: colors.WHITE,
    },
    style: {
      height: 69,
      backgroundColor: colors.PRIMARY_COLOR,
    },
    tabStyle: {
      height: 69,
    },
  },
};

const clientBottomTabs = createMaterialTopTabNavigator(clientBottomRoutes, tabBaseConfig);

const ClientStack = createStackNavigator({
  Home: {
    screen: clientBottomTabs,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const adminBottomTabs = createMaterialTopTabNavigator(adminBottomRoutes, tabBaseConfig);

const AdminStack = createStackNavigator({
  Home: {
    screen: adminBottomTabs,
    navigationOptions: {
      headerShown: false,
    },
  },
  Currency: {
    screen: Currency,
    navigationOptions: {
      headerShown: false,
    },
  },
});

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
  }
);

const router = createSwitchNavigator(
  {
    AuthStack,
    AdminStack,
    ClientStack,
  },
  {
    initialRouteName: 'AuthStack',
  }
);

const AppContainer = createAppContainer(router);

export default () => <AppContainer />;
