import actionTypes from './types';

const initialState = {
  fetchingMovements: false,
  movements: [],
  error: '',
  creatingMovement: false,
  successCreatingMovement: false,
  updatingMovement: false,
  successUpdatingMovement: false,
  deletingMovement: false,
  successDeletingMovement: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_MOVEMENTS: {
      return {
        ...state,
        fetchingMovements: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_MOVEMENTS_SUCCESS: {
      return {
        ...state,
        fetchingMovements: false,
        movements: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_MOVEMENTS_ERROR: {
      return {
        ...state,
        fetchingMovements: false,
        movements: [],
        error: action.payload,
      };
    }

    case actionTypes.CREATING_MOVEMENT: {
      return {
        ...state,
        creatingMovement: true,
        error: '',
      };
    }

    case actionTypes.CREATING_MOVEMENT_SUCCESS: {
      return {
        ...state,
        creatingMovement: false,
        successCreatingMovement: true,
        error: '',
      };
    }

    case actionTypes.CREATING_MOVEMENT_ERROR: {
      return {
        ...state,
        creatingMovement: false,
        successCreatingMovement: false,
        error: action.payload,
      };
    }

    case actionTypes.UPDATING_MOVEMENT: {
      return {
        ...state,
        updatingMovement: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_MOVEMENT_SUCCESS: {
      return {
        ...state,
        updatingMovement: false,
        successUpdatingMovement: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_MOVEMENT_ERROR: {
      return {
        ...state,
        updatingMovement: false,
        successUpdatingMovement: false,
        error: action.payload,
      };
    }

    case actionTypes.DELETING_MOVEMENT: {
      return {
        ...state,
        deletingMovement: true,
        error: '',
      };
    }

    case actionTypes.DELETING_MOVEMENT_SUCCESS: {
      return {
        ...state,
        deletingMovement: false,
        successDeletingMovement: true,
        error: '',
      };
    }

    case actionTypes.DELETING_MOVEMENT_ERROR: {
      return {
        ...state,
        deletingMovement: false,
        successDeletingMovement: false,
        error: action.payload,
      };
    }

    case actionTypes.RESET_MOVEMENT_INFO: {
      return {
        ...state,
        successCreatingMovement: false,
        successUpdatingMovement: false,
        successDeletingMovement: false,
        error: '',
      };
    }

    default:
      return state;
  }
};
