import actionTypes from './types';

const initialState = {
  fetchingCurrencies: false,
  currencies: [],
  error: '',
  creatingCurrency: false,
  successCreatingCurrency: false,
  updatingCurrency: false,
  successUpdatingCurrency: false,
  deletingCurrency: false,
  successDeletingCurrency: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_CURRENCIES: {
      return {
        ...state,
        fetchingCurrencies: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_CURRENCIES_SUCCESS: {
      return {
        ...state,
        fetchingCurrencies: false,
        currencies: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_CURRENCIES_ERROR: {
      return {
        ...state,
        fetchingCurrencies: false,
        currencies: [],
        error: action.payload,
      };
    }

    case actionTypes.CREATING_CURRENCY: {
      return {
        ...state,
        creatingCurrency: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CURRENCY_SUCCESS: {
      return {
        ...state,
        creatingCurrency: false,
        successCreatingCurrency: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CURRENCY_ERROR: {
      return {
        ...state,
        creatingCurrency: false,
        successCreatingCurrency: false,
        error: action.payload,
      };
    }

    case actionTypes.UPDATING_CURRENCY: {
      return {
        ...state,
        updatingCurrency: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CURRENCY_SUCCESS: {
      return {
        ...state,
        updatingCurrency: false,
        successUpdatingCurrency: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CURRENCY_ERROR: {
      return {
        ...state,
        updatingCurrency: false,
        successUpdatingCurrency: false,
        error: action.payload,
      };
    }

    case actionTypes.DELETING_CURRENCY: {
      return {
        ...state,
        deletingCurrency: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CURRENCY_SUCCESS: {
      return {
        ...state,
        deletingCurrency: false,
        successDeletingCurrency: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CURRENCY_ERROR: {
      return {
        ...state,
        deletingCurrency: false,
        successDeletingCurrency: false,
        error: action.payload,
      };
    }

    case actionTypes.RESET_CURRENCY_INFO: {
      return {
        ...state,
        successCreatingCurrency: false,
        successUpdatingCurrency: false,
        successDeletingCurrency: false,
      };
    }

    default:
      return state;
  }
};
