import { API } from './config';

const login = (data) => API().post('/1a292dce-a20a-4d74-b09e-9ba1a51b8de0', data);

export {
  login
};