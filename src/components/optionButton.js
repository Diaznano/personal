import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import colors from '../assets/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.PRIMARY_COLOR,
  },
});

const OptionButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default OptionButton;
