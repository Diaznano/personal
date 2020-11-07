import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_COLOR,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.WHITE,
  },
});
const Button = ({ text, onPress, loading, textStyle, buttonStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.shadow, buttonStyle]}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.SPINNER_COLOR} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
  textStyle: PropTypes.shape({}),
  buttonStyle: PropTypes.shape({}),
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  textStyle: {},
  buttonStyle: {},
};

export default Button;
