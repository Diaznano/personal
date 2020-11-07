import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import colors from '../assets/colors';

import { currenciesIcon, clientsIcon, categoriesIcon } from '../assets/images';
import { Categories, Currencies, Clients } from '../views';

const styles = StyleSheet.create({
  text: {
    color: colors.WHITE,
    fontSize: 11,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: colors.WHITE,
  },
});

const renderIcon = (key) => {
  let icon;
  switch (key) {
    case 'Currencies':
      icon = currenciesIcon;
      break;
    case 'Clients':
      icon = clientsIcon;
      break;
    default:
      icon = categoriesIcon;
  }
  return <Image style={styles.image} source={icon} />;
};

const renderLabel = (key) => {
  return (
    <Text numberOfLines={1} style={styles.text}>
      {key}
    </Text>
  );
};

const bottomRouteConfigFor = (screen, key) => {
  return {
    screen,
    navigationOptions: {
      tabBarIcon: () => {
        return renderIcon(key);
      },
      tabBarLabel: () => {
        return renderLabel(key);
      },
      swipeEnabled: false,
    },
  };
};

const adminBottomRoutes = {
  Currencies: bottomRouteConfigFor(Currencies, 'Currencies'),
  Clients: bottomRouteConfigFor(Clients, 'Clients'),
  Categories: bottomRouteConfigFor(Categories, 'Categories'),
};

export default adminBottomRoutes;
