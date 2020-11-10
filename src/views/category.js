import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Button, Header, MaterialInput } from '../components';
import { showToast, validateRequiredField } from '../helpers';
import {
  createCategoryAction,
  resetInfoAction,
  updateCategoryAction,
} from '../redux/category/actions';

const Category = ({
  navigation: { goBack, getParam },
  creatingCategory,
  updatingCategory,
  successCreatingCategory,
  successUpdatingCategory,
  error,
  actions: { resetInfo, createCategory, updateCategory },
}) => {
  const [isNew, setIsNew] = useState(true);
  const [categoryData, setCategoryData] = useState({
    name: '',
    nameError: '',
  });

  useEffect(() => {
    const type = getParam('isNew');
    setIsNew(type);
  }, [getParam('isNew')]);

  useEffect(() => {
    if (error) {
      showToast(error);
    }
  }, [error]);

  useEffect(() => {
    const category = getParam('category');
    if (category) {
      setCategoryData(category);
    }
  }, [getParam('category')]);

  useEffect(() => {
    if (successCreatingCategory || successUpdatingCategory) {
      resetInfo();
      goBack();
    }
  }, [successCreatingCategory, successUpdatingCategory]);

  const handleOnChangeValue = (inputKey, value) => {
    setCategoryData({
      ...categoryData,
      [inputKey]: value,
      [`${inputKey}Error`]: '',
    });
  };

  const validateFields = () => {
    const inputs = ['name'];
    const values = {
      name: categoryData.name,
    };

    const errors = validateRequiredField(inputs, values);

    if (errors) {
      setCategoryData({
        ...categoryData,
        ...errors,
      });
    }

    return !!errors;
  };

  const handleOnPressSave = () => {
    if (!validateFields()) {
      const data = {
        name: categoryData.name,
      };
      if (isNew) {
        createCategory(data);
      } else {
        updateCategory(data);
      }
    }
  };

  return (
    <>
      <Header title={isNew ? 'New Category' : 'Edit Category'} showGoBackButton />
      <View style={{ paddingBottom: 100, margin: 20 }}>
        <MaterialInput
          label="Name"
          inputKey="name"
          value={categoryData.name}
          onChangeValue={handleOnChangeValue}
          placeholder="Enter the name"
          error={categoryData.nameError}
        />
        <Button
          text="SAVE"
          onPress={handleOnPressSave}
          loading={creatingCategory || updatingCategory}
        />
      </View>
    </>
  );
};

Category.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
  actions: PropTypes.shape({
    resetInfo: PropTypes.func,
    createCategory: PropTypes.func,
    updateCategory: PropTypes.func,
  }).isRequired,
  successCreatingCategory: PropTypes.bool.isRequired,
  creatingCategory: PropTypes.bool.isRequired,
  updatingCategory: PropTypes.bool.isRequired,
  successUpdatingCategory: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Category.defaultProps = {
  error: '',
};

const mapStoreToProps = (store) => ({
  successCreatingCategory: store.categoryReducer.successCreatingCategory,
  creatingCategory: store.categoryReducer.creatingCategory,
  updatingCategory: store.categoryReducer.updatingCategory,
  error: store.categoryReducer.error,
  successUpdatingCategory: store.categoryReducer.successUpdatingCategory,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      createCategory: createCategoryAction,
      updateCategory: updateCategoryAction,
      resetInfo: resetInfoAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Category);
