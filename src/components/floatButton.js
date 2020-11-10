import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { addCircle } from '../assets/images';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 50,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: colors.SHADOW,
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowOpacity: 0.5,
      },
    }),
  },
  icon: {
    width: 50,
    height: 50,
  },
});

const FloatButton = ({ onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.button}>
      <Image source={addCircle} style={styles.icon} />
    </TouchableOpacity>
  );
};

FloatButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default FloatButton;
