/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Header, MaterialInput, MaterialSelect } from '../components';

import {
  createMovementAction,
  updateMovementAction,
  resetInfoAction,
} from '../redux/movements/actions';
import { validateRequiredField } from '../helpers';

const Movement = ({
  navigation: { goBack, getParam },
  actions: { createMovement, updateMovement, resetInfo },
  creatingMovement,
  updatingMovement,
  successCreatingMovement,
  successUpdatingMovement,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedTransactionType, setSelectedTransactionType] = useState(transactionTypes[0]);
  const [isNew, setIsNew] = useState(true);
  const [movementData, setMovementData] = useState({
    type: '',
    category: '',
    date: '',
    amount: '',
    currency: '',
    title: '',
    description: '',
    titleError: '',
    descriptionError: '',
    amountError: '',
  });

  useEffect(() => {
    const type = getParam('isNew');
    setIsNew(type);
  }, [getParam('isNew')]);

  useEffect(() => {
    const movement = getParam('movement');
    if (movement) {
      setMovementData(movement);
    }
  }, [getParam('movement')]);

  useEffect(() => {
    if (successCreatingMovement || successUpdatingMovement) {
      resetInfo();
      goBack();
    }
  }, [successCreatingMovement, successUpdatingMovement]);

  const handleOnChangeValue = (inputKey, value) => {
    setMovementData({
      ...movementData,
      [inputKey]: value,
      [`${inputKey}Error`]: '',
    });
  };

  const handleOnSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  const handleOnSelectTransactionType = (item) => {
    setSelectedTransactionType(item);
  };

  const handleOnSelectCurrency = (item) => {
    setSelectedCurrency(item);
  };

  const validateFields = () => {
    const inputs = ['title', 'description', 'amount'];
    const values = {
      title: movementData.title,
      description: movementData.description,
      amount: movementData.amount,
    };

    const errors = validateRequiredField(inputs, values);

    if (errors) {
      setMovementData({
        ...movementData,
        ...errors,
      });
    }

    return !!errors;
  };

  const handleOnPressSave = () => {
    if (!validateFields()) {
      const data = {
        title: movementData.title,
        type: movementData.type,
        category: movementData.category,
        date: movementData.date,
        amount: movementData.amount,
        description: movementData.description,
        currency: movementData.currency,
      };
      if (isNew) {
        createMovement(data);
      } else {
        updateMovement(data);
      }
    }
  };

  return (
    <>
      <Header title="New Movement" showGoBackButton />
      <ScrollView contentContainerStyle={{ margin: 20, flex: 1 }}>
        <View style={{ paddingBottom: 100 }}>
          <MaterialInput
            label="Title"
            inputKey="title"
            value={movementData.title}
            onChangeValue={handleOnChangeValue}
            placeholder="Enter the title"
            error={movementData.titleError}
          />
          <MaterialSelect
            data={categories}
            value={selectedCategory.name}
            onSelect={handleOnSelectCategory}
            backWhite
          />
          <MaterialSelect
            data={transactionTypes}
            value={selectedTransactionType.name}
            onSelect={handleOnSelectTransactionType}
            backWhite
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{ width: '45%' }}>
              <MaterialInput
                keyboardType="number-pad"
                label="Amount"
                inputKey="amount"
                value={movementData.amount}
                onChangeValue={handleOnChangeValue}
                placeholder="0,00"
                error={movementData.amountError}
              />
            </View>
            <View style={{ width: '45%' }}>
              <MaterialSelect
                data={currencies}
                value={selectedCurrency.name}
                onSelect={handleOnSelectCurrency}
                backWhite
              />
            </View>
          </View>
          <MaterialInput
            label="Description"
            inputKey="description"
            value={movementData.description}
            onChangeValue={handleOnChangeValue}
            placeholder="Enter the description"
            error={movementData.descriptionError}
          />

          <Button
            text="SAVE"
            onPress={handleOnPressSave}
            loading={updatingMovement || creatingMovement}
          />
        </View>
      </ScrollView>
    </>
  );
};

Movement.propTypes = {
  navigation: PropTypes.shape({ goBack: PropTypes.func, getParam: PropTypes.func }).isRequired,
  actions: PropTypes.shape({
    createMovement: PropTypes.func,
    updateMovement: PropTypes.func,
    resetInfo: PropTypes.func,
  }).isRequired,
  creatingMovement: PropTypes.bool.isRequired,
  updatingMovement: PropTypes.bool.isRequired,
  successCreatingMovement: PropTypes.bool.isRequired,
  successUpdatingMovement: PropTypes.bool.isRequired,
};

const mapStoreToProps = (store) => ({
  creatingMovement: store.movementsReducer.creatingMovement,
  updatingMovement: store.movementsReducer.updatingMovement,
  successCreatingMovement: store.movementsReducer.successCreatingMovement,
  successUpdatingMovement: store.movementsReducer.successUpdatingMovement,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      createMovement: createMovementAction,
      updateMovement: updateMovementAction,
      resetInfo: resetInfoAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Movement);

const currencies = [
  {
    id: 1,
    name: 'Pesos',
    abreviature: 'ARS',
  },
  {
    id: 2,
    name: 'Dólares',
    abreviature: 'USD',
  },
];

const categories = [
  {
    id: 1,
    name: 'Food',
  },
  {
    id: 2,
    name: 'Clothes',
  },
  {
    id: 3,
    name: 'Party and alcohol',
  },
];
const transactionTypes = [
  {
    id: 1,
    name: 'Expenses',
  },
  {
    id: 2,
    name: 'Revenues',
  },
];
