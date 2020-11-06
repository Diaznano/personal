import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { login } from '../api';

const Login = () => {
  useEffect(() => {
      async function fetchData() {
        const data = { user: 'User', password: 'password' };
        const response = await login(data);
        console.log('--Respon', response);
      }
      fetchData();
  }, []);

  return (
    <View>
      <Text>Login</Text>
    </View>
)};

export default Login;
