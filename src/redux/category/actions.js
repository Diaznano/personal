import actionTypes from './types';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../../api';
import { showToast } from '../../helpers';
import { Errors } from '../../constants';

const getCategoriesAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_CATEGORIES });
  try {
    const response = await getCategories();
    const {
      data: { categories },
    } = response;
    dispatch({
      type: actionTypes.FETCHING_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (e) {
    dispatch({
      type: actionTypes.FETCHING_CATEGORIES_ERROR,
      payload: Errors.service,
    });
  }
};

const createCategoryAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATING_CATEGORY });
  try {
    const response = await createCategory(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.CREATING_CATEGORY_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.CREATING_CATEGORY_ERROR,
      payload: error,
    });
  }
};

const updateCategoryAction = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATING_CATEGORY });
  try {
    const response = await updateCategory(data);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.UPDATING_CATEGORY_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    showToast(error);
    dispatch({
      type: actionTypes.UPDATING_CATEGORY_ERROR,
      payload: error,
    });
  }
};

const deleteCategoryAction = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETING_CATEGORY });
  try {
    const response = await deleteCategory(id);
    const {
      data: { message },
    } = response;
    showToast(message);
    dispatch({
      type: actionTypes.DELETING_CATEGORY_SUCCESS,
    });
  } catch (e) {
    const error = Errors.service;
    dispatch({
      type: actionTypes.DELETING_CATEGORY_ERROR,
      payload: error,
    });
  }
};

const resetInfoAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.RESET_CATEGORY_INFO });
};

export {
  getCategoriesAction,
  createCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
  resetInfoAction,
};
