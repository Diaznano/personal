import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Button, Header, MaterialInput } from '../components';
import { showToast, validateRequiredField } from '../helpers';
import {
  createCurrencyAction,
  resetInfoAction,
  updateCurrencyAction,
} from '../redux/currency/actions';

const Currency = ({
  navigation: { goBack, getParam },
  creatingCurrency,
  updatingCurrency,
  successCreatingCurrency,
  successUpdatingCurrency,
  error,
  actions: { resetInfo, createCurrency, updateCurrency },
}) => {
  const [isNew, setIsNew] = useState(true);
  const [currencyData, setCurrencyData] = useState({
    name: '',
    abreviature: '',
    nameError: '',
    abreviatureError: '',
  });

  useEffect(() => {
    const type = getParam('isNew');
    setIsNew(type);
  }, [getParam('isNew')]);

  useEffect(() => {
    showToast(error);
  }, error);

  useEffect(() => {
    const currency = getParam('currency');
    if (currency) {
      setCurrencyData(currency);
    }
  }, [getParam('currency')]);

  useEffect(() => {
    if (successCreatingCurrency || successUpdatingCurrency) {
      resetInfo();
      goBack();
    }
  }, [successCreatingCurrency, successUpdatingCurrency]);

  const handleOnChangeValue = (inputKey, value) => {
    setCurrencyData({
      ...currencyData,
      [inputKey]: value,
      [`${inputKey}Error`]: '',
    });
  };

  const validateFields = () => {
    const inputs = ['name', 'abreviature'];
    const values = {
      name: currencyData.name,
      abreviature: currencyData.abreviature,
    };

    const errors = validateRequiredField(inputs, values);

    if (errors) {
      setCurrencyData({
        ...currencyData,
        ...errors,
      });
    }

    return !!errors;
  };

  const handleOnPressSave = () => {
    if (!validateFields()) {
      const data = {
        name: currencyData.name,
        abreviature: currencyData.abreviature,
      };
      if (isNew) {
        createCurrency(data);
      } else {
        updateCurrency(data);
      }
    }
  };

  return (
    <>
      <Header title={isNew ? 'New Currency' : 'Edit Currency'} showGoBackButton />
      <View style={{ paddingBottom: 100, margin: 20 }}>
        <MaterialInput
          label="Name"
          inputKey="name"
          value={currencyData.name}
          onChangeValue={handleOnChangeValue}
          placeholder="Enter the name"
          error={currencyData.nameError}
        />
        <MaterialInput
          label="Abreviature"
          inputKey="abreviature"
          value={currencyData.abreviature}
          onChangeValue={handleOnChangeValue}
          placeholder="Enter the abreviature"
          error={currencyData.abreviatureError}
        />
        <Button
          text="SAVE"
          onPress={handleOnPressSave}
          loading={creatingCurrency || updatingCurrency}
        />
      </View>
    </>
  );
};

Currency.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
  actions: PropTypes.shape({
    resetInfo: PropTypes.func,
    createCurrency: PropTypes.func,
    updateCurrency: PropTypes.func,
  }).isRequired,
  successCreatingCurrency: PropTypes.bool.isRequired,
  creatingCurrency: PropTypes.bool.isRequired,
  updatingCurrency: PropTypes.bool.isRequired,
  successUpdatingCurrency: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Currency.defaultProps = {
  error: '',
};

const mapStoreToProps = (store) => ({
  successCreatingCurrency: store.currencyReducer.successCreatingCurrency,
  creatingCurrency: store.currencyReducer.creatingCurrency,
  updatingCurrency: store.currencyReducer.updatingCurrency,
  error: store.currencyReducer.error,
  successUpdatingCurrency: store.currencyReducer.successUpdatingCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      createCurrency: createCurrencyAction,
      updateCurrency: updateCurrencyAction,
      resetInfo: resetInfoAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Currency);
