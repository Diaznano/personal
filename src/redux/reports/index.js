import actionTypes from './types';

const initialState = {
  fetchingBalance: false,
  balances: [],
  fetchingExpensesForecast: false,
  expensesForecast: [],
  fetchingTransactionsByFilter: false,
  transactionsByFilter: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_BALANCE: {
      return {
        ...state,
        fetchingBalance: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_BALANCE_SUCCESS: {
      return {
        ...state,
        fetchingBalance: false,
        balances: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_BALANCE_ERROR: {
      return {
        ...state,
        fetchingBalance: false,
        balances: [],
        error: action.payload,
      };
    }

    case actionTypes.FETCHING_EXPENSES_FORECAST: {
      return {
        ...state,
        fetchingExpensesForecast: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_FORECAST_SUCCESS: {
      return {
        ...state,
        fetchingExpensesForecast: false,
        expensesForecast: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_FORECAST_ERROR: {
      return {
        ...state,
        fetchingExpensesForecast: false,
        expensesForecast: [],
        error: action.payload,
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY: {
      return {
        ...state,
        fetchingTransactionsByFilter: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_CATEGORY_ERROR: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: [],
        error: action.payload,
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY: {
      return {
        ...state,
        fetchingTransactionsByFilter: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_SUCCESS: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_EXPENSES_BY_MONTHS_BY_DAY_ERROR: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: [],
        error: action.payload,
      };
    }

    case actionTypes.FETCHING_REPORT_MOVEMENTS: {
      return {
        ...state,
        fetchingTransactionsByFilter: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_REPORT_MOVEMENTS_SUCCESS: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_REPORT_MOVEMENTS_ERROR: {
      return {
        ...state,
        fetchingTransactionsByFilter: false,
        transactionsByFilter: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
