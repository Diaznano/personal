import actionTypes from './types';
import { login } from '../../api';
import { setAuthorizationToken } from '../../api/config';
import LocalStorageService from '../../helpers/localStorageService';
import { Errors } from '../../constants';

const loginAction = (data, isAdmin) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_LOGIN });
  try {
    const response = await login(data);
    const {
      data: { token },
    } = response;
    LocalStorageService.setToken(token, isAdmin);
    setAuthorizationToken(token);
    dispatch({
      type: actionTypes.FETCHING_LOGIN_SUCCESS,
      payload: { isAdmin },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_LOGIN_ERROR,
      payload: Errors.service,
    });
  }
};

const autoLoginAction = (token, isAdmin) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_LOGIN });
  try {
    setAuthorizationToken(token);
    setTimeout(() => {
      dispatch({
        type: actionTypes.FETCHING_LOGIN_SUCCESS,
        payload: { isAdmin },
      });
    }, 500);
  } catch (e) {
    setTimeout(() => {
      dispatch({
        type: actionTypes.FETCHING_LOGIN_ERROR,
        payload: Errors.service,
      });
    }, 500);
  }
};

export { loginAction, autoLoginAction };
