import actionTypes from './types';
import {
  getBalance,
  getExpensesByMonthsByCategory,
  getExpensesByMonthsByDay,
  getExpensesForecast,
  getReportMovements,
} from '../../api';
import { showToast } from '../../helpers';
import { Errors } from '../../constants';

const getBalanceAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_BALANCE });
  try {
    const response = await getBalance();
    const {
      data: { accounts },
    } = response;

    dispatch({
      type: actionTypes.FETCHING_BALANCE_SUCCESS,
      payload: accounts,
    });
  } catch (e) {
    const message = Errors.service;
    showToast(message);
    dispatch({
      type: actionTypes.FETCHING_BALANCE_ERROR,
      payload: message,
    });
  }
};

const getExpensesForecastAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_EXPENSES_FORECAST });
  try {
    const response = await getExpensesForecast();
    const {
      data: { accounts },
    } = response;

    dispatch({
      type: actionTypes.FETCHING_EXPENSES_FORECAST_SUCCESS,
      payload: accounts,
    });
  } catch (e) {
    const message = Errors.service;
    showToast(message);
    dispatch({
      type: actionTypes.FETCHING_EXPENSES_FORECAST_ERROR,
      payload: message,
    });
  }
};

const getExpensesByMonthsByCategoryAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY });
  try {
    const response = await getExpensesByMonthsByCategory();
    const {
      data: { transactions_filtered },
    } = response;

    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY_SUCCESS,
      payload: transactions_filtered,
    });
  } catch (e) {
    const message = Errors.service;
    showToast(message);
    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY_ERROR,
      payload: message,
    });
  }
};

const getExpensesByMonthsByDayAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY });
  try {
    const response = await getExpensesByMonthsByDay();
    const {
      data: { transactions_filtered },
    } = response;

    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_SUCCESS,
      payload: transactions_filtered,
    });
  } catch (e) {
    const message = Errors.service;
    showToast(message);
    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_ERROR,
      payload: message,
    });
  }
};

const getReportMovementsAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY });
  try {
    const response = await getReportMovements();
    const {
      data: { transactions_filtered },
    } = response;

    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_SUCCESS,
      payload: transactions_filtered,
    });
  } catch (e) {
    const message = Errors.service;
    showToast(message);
    dispatch({
      type: actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_ERROR,
      payload: message,
    });
  }
};

export {
  getBalanceAction,
  getExpensesForecastAction,
  getExpensesByMonthsByCategoryAction,
  getExpensesByMonthsByDayAction,
  getReportMovementsAction,
};
