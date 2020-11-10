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

const getCategories = () => API().get(Paths.CATEGORIES);
const createCategory = (data) => API().post(Paths.CREATE_CATEGORY, data);
const updateCategory = (data) => API().post(Paths.UPDATE_CATEGORY, data);
const deleteCategory = (id) => API().delete(Paths.DELETE_CATEGORY, id);

const getBalance = () => API().get(Paths.BALANCE);
const getExpensesForecast = () => API().get(Paths.EXPENSES_FORECAST);
const getExpensesByMonthsByCategory = () => API().get(Paths.EXPENSES_BY_MONTHS_BY_CATEGORY);
const getExpensesByMonthsByDay = () => API().get(Paths.EXPENSES_BY_MONTHS_BY_DAY);
const getReportMovements = () => API().get(Paths.REPORT_MOVEMENTS);

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
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getBalance,
  getExpensesByMonthsByCategory,
  getExpensesForecast,
  getExpensesByMonthsByDay,
  getReportMovements,
};
