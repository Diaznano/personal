import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Switch, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/user/actions';
import { Button, Header, MaterialInput } from '../components';
import { logo } from '../assets/images';
import { validateRequiredField } from '../helpers';
import colors from '../assets/colors';

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, marginTop: 20 },
  logo: { width: 200, height: 200, alignSelf: 'center' },
  containerSwitch: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' },
});

const LoginScreen = ({
  actions: { loginUser },
  loading,
  error,
  loginSuccess,
  navigation: { navigate },
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState({
    user: '',
    password: '',
    userError: '',
    passwordError: '',
  });

  useEffect(() => {
    if (loginSuccess) {
      if (isAdmin) {
        navigate('AdminStack');
      } else {
        navigate('ClientStack');
      }
    }
  }, [loginSuccess]);

  const handleOnChangeValue = (inputKey, value) => {
    setUserData({
      ...userData,
      [inputKey]: value,
      userError: '',
      passwordError: '',
    });
  };

  const validateFields = () => {
    const inputs = ['user', 'password'];
    const values = { user: userData.user, password: userData.password };

    const errors = validateRequiredField(inputs, values);

    if (errors) {
      setUserData({
        ...userData,
        ...errors,
      });
    }

    return !!errors;
  };

  const handleLogin = () => {
    if (!validateFields()) {
      const data = { user: userData.user, password: userData.password };
      loginUser(data, isAdmin);
    }
  };

  const toggleSwitch = (value) => {
    setIsAdmin(value);
  };

  return (
    <>
      <Header title="Login" />
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <MaterialInput
          value={userData.user}
          inputKey="user"
          label="User"
          error={error}
          onChangeValue={handleOnChangeValue}
        />
        <MaterialInput
          value={userData.password}
          inputKey="password"
          label="Password"
          showVisibilityIcon
          onChangeValue={handleOnChangeValue}
        />
        <View style={styles.containerSwitch}>
          <Text>Login as admin</Text>
          <Switch
            thumbColor={isAdmin ? colors.PRIMARY_COLOR : colors.LIGHT_GRAY}
            trackColor={{ true: colors.PRIMARY_COLOR, false: colors.GRAY }}
            onValueChange={toggleSwitch}
            value={isAdmin}
          />
        </View>
        <Button text="Sign In" onPress={handleLogin} loading={loading} />
      </View>
    </>
  );
};

LoginScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    loginUser: PropTypes.func,
  }).isRequired,
  error: PropTypes.string,
  loginSuccess: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

LoginScreen.defaultProps = {
  error: '',
};

const mapStoreToProps = (store) => ({
  loading: store.userReducer.fetchingLogin,
  loginSuccess: store.userReducer.loginSuccess,
  error: store.userReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      loginUser: loginAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(LoginScreen);
