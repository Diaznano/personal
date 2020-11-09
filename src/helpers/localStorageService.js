import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageService = (() => {
  function setToken(token, isAdmin) {
    AsyncStorage.setItem('access_token', token);
    AsyncStorage.setItem('isAdmin', isAdmin.toString());
  }
  function getAccessToken() {
    return AsyncStorage.getItem('access_token');
  }
  function getIsAdmin() {
    return AsyncStorage.getItem('isAdmin');
  }
  function clearToken() {
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('isAdmin');
  }
  return {
    setToken,
    getAccessToken,
    getIsAdmin,
    clearToken,
  };
})();
export default LocalStorageService;
