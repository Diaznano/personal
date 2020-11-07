import actionTypes from './types';
import { login } from '../../api';
import { setAuthorizationToken } from '../../api/config';

const loginAction = (data, isAdmin) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_LOGIN });
  try {
    const response = await login(data);
    const {
      data: { token },
    } = response;
    setAuthorizationToken(token);
    dispatch({
      type: actionTypes.FETCHING_LOGIN_SUCCESS,
      payload: { isAdmin },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_LOGIN_ERROR,
      payload: 'Something went wrong. please try again.',
    });
  }
};

export { loginAction };
