import actionTypes from './types';

const initialState = {
  fetchingClients: false,
  clients: [],
  error: '',
  creatingClient: false,
  successCreatingClient: false,
  updatingClient: false,
  deletingClient: false,
  successDeletingClient: false,
  fetchingProfile: false,
  client: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_CLIENTS: {
      return {
        ...state,
        fetchingClients: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_CLIENTS_SUCCESS: {
      return {
        ...state,
        fetchingClients: false,
        clients: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_CLIENTS_ERROR: {
      return {
        ...state,
        fetchingClients: false,
        clients: [],
        error: action.payload,
      };
    }

    case actionTypes.CREATING_CLIENT: {
      return {
        ...state,
        creatingClient: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CLIENT_SUCCESS: {
      return {
        ...state,
        creatingClient: false,
        successCreatingClient: true,
        error: '',
      };
    }

    case actionTypes.CREATING_CLIENT_ERROR: {
      return {
        ...state,
        creatingClient: false,
        successCreatingClient: false,
        error: action.payload,
      };
    }

    case actionTypes.UPDATING_CLIENT: {
      return {
        ...state,
        updatingClient: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CLIENT_SUCCESS: {
      return {
        ...state,
        updatingClient: false,
        successUpdatingClient: true,
        error: '',
      };
    }

    case actionTypes.UPDATING_CLIENT_ERROR: {
      return {
        ...state,
        updatingClient: false,
        successUpdatingClient: false,
        error: action.payload,
      };
    }

    case actionTypes.DELETING_CLIENT: {
      return {
        ...state,
        deletingClient: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CLIENT_SUCCESS: {
      return {
        ...state,
        deletingClient: false,
        successDeletingClient: true,
        error: '',
      };
    }

    case actionTypes.DELETING_CLIENT_ERROR: {
      return {
        ...state,
        deletingClient: false,
        successDeletingClient: false,
        error: action.payload,
      };
    }

    case actionTypes.RESET_CLIENT_INFO: {
      return {
        ...state,
        successCreatingClient: false,
        successUpdatingClient: false,
        successDeletingClient: false,
        error: '',
      };
    }

    case actionTypes.FETCHING_PROFILE: {
      return {
        ...state,
        fetchingProfile: true,
        error: '',
      };
    }

    case actionTypes.FETCHING_PROFILE_SUCCESS: {
      return {
        ...state,
        fetchingProfile: false,
        client: action.payload,
        error: '',
      };
    }

    case actionTypes.FETCHING_PROFILE_ERROR: {
      return {
        ...state,
        fetchingProfile: false,
        client: [],
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
