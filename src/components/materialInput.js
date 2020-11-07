import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { visibilityIcon, visibilityOffIcon } from '../assets/images';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  label: {
    color: colors.PRIMARY_COLOR,
    paddingBottom: 5,
    width: '100%',
  },
  error: {
    fontSize: 15,
    color: colors.ERROR,
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    color: colors.BLACK,
    height: 50,
    flex: 1,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.PRIMARY_COLOR,
    borderWidth: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 10,
  },
  titleTextStyle: {
    textAlign: 'left',
    width: '90%',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: colors.GRAY,
  },
});

const MaterialInput = ({
  inputKey,
  value,
  label,
  error,
  onChangeValue,
  showVisibilityIcon,
  ...otherProps
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleOnPressVisibilityIcon = () => setSecureTextEntry(!secureTextEntry);

  const renderVisibilityIcon = () => {
    const icon = secureTextEntry ? visibilityIcon : visibilityOffIcon;
    return (
      <TouchableOpacity onPress={handleOnPressVisibilityIcon}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(text) => {
            onChangeValue(inputKey, text);
          }}
          value={value}
          {...otherProps}
          secureTextEntry={showVisibilityIcon && secureTextEntry}
        />
        {showVisibilityIcon && renderVisibilityIcon()}
      </View>

      <Text style={styles.error}>{error}</Text>
    </>
  );
};

MaterialInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired,
  showVisibilityIcon: PropTypes.bool,
}

MaterialInput.defaultProps = {
  error: '',
  showVisibilityIcon: false,
};

export default MaterialInput;
