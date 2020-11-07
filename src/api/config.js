import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3';

const API = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
      'Content-Type': contentType,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject(error),
  );

  return instance;
};

const setAuthorizationToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export { API, setAuthorizationToken };
