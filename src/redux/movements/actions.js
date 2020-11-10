import actionTypes from './types';
import { createMovement, deleteMovement, getMovements, updateMovement } from '../../api';
import { showToast } from '../../helpers';
import { Errors } from '../../constants';

const getMovementsAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_MOVEMENTS });
  try {
    const response = await getMovements();
    const {
      data: { transactions },
    } = response;
    dispatch({
      type: actionTypes.FETCHING_MOVEMENTS_SUCCESS,
      payload: transactions,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_MOVEMENTS_ERROR,
      payload: Errors.service,
    });
  }
};

const createMovementAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATING_MOVEMENT });
  try {
    const response = await createMovement(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.CREATING_MOVEMENT_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.CREATING_MOVEMENT_ERROR,
      payload: error,
    });
  }
};

const updateMovementAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATING_MOVEMENT });
  try {
    const response = await updateMovement(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.UPDATING_MOVEMENT_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.UPDATING_MOVEMENT_ERROR,
      payload: error,
    });
  }
};

const deleteMovementAction = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETING_MOVEMENT });
  try {
    console.log('--', id);
    const response = await deleteMovement(id);
    const {
      data: { message },
    } = response;
    console.log('--res', response);
    showToast(message);
    dispatch({
      type: actionTypes.DELETING_MOVEMENT_SUCCESS,
    });
  } catch (e) {
    console.log('--resss', e);
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.DELETING_MOVEMENT_ERROR,
      payload: error,
    });
  }
};

const resetInfoAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.RESET_MOVEMENT_INFO });
};

export {
  getMovementsAction,
  createMovementAction,
  updateMovementAction,
  deleteMovementAction,
  resetInfoAction,
};
