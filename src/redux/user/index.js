import actionTypes from './types';

const initialState = {
  fetchingLogin: false,
  loginSuccess: false,
  error: '',
  isAdmin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_LOGIN: {
      return {
        ...state,
        fetchingLogin: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_LOGIN_SUCCESS: {
      const { isAdmin } = action.payload;
      return {
        ...state,
        fetchingLogin: false,
        loginSuccess: true,
        error: '',
        isAdmin,
      };
    }

    case actionTypes.FETCHING_LOGIN_ERROR: {
      return {
        ...state,
        fetchingLogin: false,
        loginSuccess: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
