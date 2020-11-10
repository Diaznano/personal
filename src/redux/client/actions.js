import actionTypes from './types';
import { createClient, deleteClient, getClients, getProfile, updateClient } from '../../api';
import { showToast } from '../../helpers';
import { Errors } from '../../constants';

const getClientsAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_CLIENTS });
  try {
    const response = await getClients();
    const {
      data: { clients },
    } = response;
    dispatch({
      type: actionTypes.FETCHING_CLIENTS_SUCCESS,
      payload: clients,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_CLIENTS_ERROR,
      payload: Errors.service,
    });
  }
};

const createClientAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATING_CLIENT });
  try {
    const response = await createClient(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.CREATING_CLIENT_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.CREATING_CLIENT_ERROR,
      payload: error,
    });
  }
};

const updateClientAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATING_CLIENT });
  try {
    const response = await updateClient(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.UPDATING_CLIENT_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.UPDATING_CLIENT_ERROR,
      payload: error,
    });
  }
};

const deleteClientAction = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETING_CLIENT });
  try {
    const response = await deleteClient(id);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.DELETING_CLIENT_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.DELETING_CLIENT_ERROR,
      payload: error,
    });
  }
};

const getProfileAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_PROFILE });
  try {
    const response = await getProfile();
    const {
      data: { client },
    } = response;
    dispatch({
      type: actionTypes.FETCHING_PROFILE_SUCCESS,
      payload: client,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_PROFILE_ERROR,
      payload: Errors.service,
    });
  }
};

const resetInfoAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.RESET_CLIENT_INFO });
};

export {
  getClientsAction,
  createClientAction,
  updateClient,
  updateClientAction,
  resetInfoAction,
  deleteClientAction,
  getProfileAction,
};
