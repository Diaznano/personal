import actionTypes from './types';
import { getCurrencies, createCurrency, updateCurrency, deleteCurrency } from '../../api';
import { Errors } from '../../constants';
import { showToast } from '../../helpers';

const getCurrenciesAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_CURRENCIES });
  try {
    const response = await getCurrencies();
    const {
      data: { currencies },
    } = response;
    dispatch({
      type: actionTypes.FETCHING_CURRENCIES_SUCCESS,
      payload: currencies,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_CURRENCIES_ERROR,
      payload: Errors.service,
    });
  }
};

const createCurrencyAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATING_CURRENCY });
  try {
    const response = await createCurrency(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.CREATING_CURRENCY_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.CREATING_CURRENCY_ERROR,
      payload: Errors.service,
    });
  }
};

const updateCurrencyAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATING_CURRENCY });
  try {
    const response = await updateCurrency(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.UPDATING_CURRENCY_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.UPDATING_CURRENCY_ERROR,
      payload: Errors.service,
    });
  }
};

const deleteCurrencyAction = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETING_CURRENCY });
  try {
    const response = await deleteCurrency(id);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.DELETING_CURRENCY_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.DELETING_CURRENCY_ERROR,
      payload: Errors.service,
    });
  }
};

const resetInfoAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.RESET_CURRENCY_INFO });
};

export {
  getCurrenciesAction,
  createCurrencyAction,
  updateCurrencyAction,
  deleteCurrencyAction,
  resetInfoAction,
};
