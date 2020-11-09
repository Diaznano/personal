import { API } from './config';
import { Paths } from '../constants';

const login = (data) => API().post(Paths.LOGIN, data);

const getCurrencies = () => API().get(Paths.CURRENCIES);
const createCurrency = (data) => API().post(Paths.CREATE_CURRENCY, data);
const updateCurrency = (data) => API().post(Paths.UPDATE_CURRENCY, data);
const deleteCurrency = (id) => API().delete(Paths.DELETE_CURRENCY, id);

const getClients = () => API().get(Paths.CLIENTS);
const createClient = (data) => API().post(Paths.CREATE_CLIENT, data);
const updateClient = (data) => API().post(Paths.UPDATE_CLIENT, data);
const deleteClient = (id) => API().delete(Paths.DELETE_CLIENT, id);
const getProfile = () => API().get(Paths.PROFILE);

export {
  login,
  getCurrencies,
  createCurrency,
  updateCurrency,
  deleteCurrency,
  getClients,
  createClient,
  updateClient,
  deleteClient,
  getProfile,
};
