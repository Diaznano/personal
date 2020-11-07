import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import colors from '../assets/colors';
import {
  categoriesIcon,
  balanceIcon,
  reportsIcon,
  newMovementIcon,
  profileIcon,
} from '../assets/images';
import { Balance, Categories, Movements, Reports, Profile } from '../views';

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
    case 'Balance':
      icon = balanceIcon;
      break;
    case 'Reports':
      icon = reportsIcon;
      break;
    case 'Movements':
      icon = newMovementIcon;
      break;
    case 'Profile':
      icon = profileIcon;
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

const clientBottomRoutes = {
  Balance: bottomRouteConfigFor(Balance, 'Balance'),
  Reports: bottomRouteConfigFor(Reports, 'Reports'),
  Movements: bottomRouteConfigFor(Movements, 'Movements'),
  Categories: bottomRouteConfigFor(Categories, 'Categories'),
  Profile: bottomRouteConfigFor(Profile, 'Profile'),
};

export default clientBottomRoutes;
