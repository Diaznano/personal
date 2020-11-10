import actionTypes from './types';

const initialState = {
  fetchingCategories: false,
  categories: [],
  error: '',
  creatingCategory: false,
  successCreatingCategory: false,
  updatingCategory: false,
  successUpdatingCategory: false,
  deletingCategory: false,
  successDeletingCategory: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_CATEGORIES: {
      return {
        ...state,
        fetchingCategories: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_CATEGORIES_SUCCESS: {
      return {
        ...state,
        fetchingCategories: false,
        categories: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_CATEGORIES_ERROR: {
      return {
        ...state,
        fetchingCategories: false,
        categories: [],
        error: action.payload,
      };
    }

    case actionTypes.CREATING_CATEGORY: {
      return {
        ...state,
        creatingCategory: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CATEGORY_SUCCESS: {
      return {
        ...state,
        creatingCategory: false,
        successCreatingCategory: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CATEGORY_ERROR: {
      return {
        ...state,
        creatingCategory: false,
        successCreatingCategory: false,
        error: action.payload,
      };
    }

    case actionTypes.UPDATING_CATEGORY: {
      return {
        ...state,
        updatingCategory: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CATEGORY_SUCCESS: {
      return {
        ...state,
        updatingCategory: false,
        successUpdatingCategory: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CATEGORY_ERROR: {
      return {
        ...state,
        updatingCategory: false,
        successUpdatingCategory: false,
        error: action.payload,
      };
    }

    case actionTypes.DELETING_CATEGORY: {
      return {
        ...state,
        deletingCategory: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CATEGORY_SUCCESS: {
      return {
        ...state,
        deletingCategory: false,
        successDeletingCategory: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CATEGORY_ERROR: {
      return {
        ...state,
        deletingCategory: false,
        successDeletingCategory: false,
        error: action.payload,
      };
    }

    case actionTypes.RESET_CATEGORY_INFO: {
      return {
        ...state,
        successCreatingCategory: false,
        successUpdatingCategory: false,
        successDeletingCategory: false,
      };
    }

    default:
      return state;
  }
};
