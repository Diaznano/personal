import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Header, MaterialInput } from '../components';
import EditAvatar from '../components/editAvatar';
import { showToast, validateRequiredField } from '../helpers';
import { createClientAction, resetInfoAction, updateClientAction } from '../redux/client/actions';

const Client = ({
  navigation: { getParam, goBack },
  error,
  creatingClient,
  updatingClient,
  successCreatingClient,
  successUpdatingClient,
  actions: { resetInfo, createClient, updateClient },
}) => {
  const [isNew, setIsNew] = useState(true);
  const [photoSource, setPhotoSource] = useState({
    uri: 'https://api.adorable.io/avatars/285/maxi.png',
    data: '',
  });
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    date_of_birth: '',
    photo_url: '',
    nameError: '',
    emailError: '',
    date_of_birthError: '',
  });

  useEffect(() => {
    const type = getParam('isNew');
    setIsNew(type);
    resetInfo();
  }, [getParam('isNew')]);

  useEffect(() => {
    if (error) {
      showToast(error);
    }
  }, [error]);

  useEffect(() => {
    const client = getParam('client');
    if (client) {
      setClientData(client);
    }
  }, [getParam('client')]);

  useEffect(() => {
    if (successCreatingClient || successUpdatingClient) {
      resetInfo();
      goBack();
    }
  }, [successCreatingClient, successUpdatingClient]);

  const handleOnChangeValue = (inputKey, value) => {
    setClientData({
      ...clientData,
      [inputKey]: value,
      [`${inputKey}Error`]: '',
    });
  };

  const validateFields = () => {
    const inputs = ['name', 'email', 'date_of_birth'];
    const values = {
      name: clientData.name,
      email: clientData.email,
      date_of_birth: clientData.date_of_birth,
    };

    const errors = validateRequiredField(inputs, values);

    if (errors) {
      setClientData({
        ...clientData,
        ...errors,
      });
    }

    return !!errors;
  };

  const handleOnPressSave = () => {
    if (!validateFields()) {
      const data = {
        name: clientData.name,
        email: clientData.email,
        date_of_birth: clientData.date_of_birth,
        photo_url: photoSource.data,
      };
      if (isNew) {
        createClient(data);
      } else {
        updateClient(data);
      }
    }
  };

  return (
    <>
      <Header title={isNew ? 'New Client' : 'Edit Client'} showGoBackButton />
      <ScrollView contentContainerStyle={{ flex: 1, margin: 20 }}>
        <View style={{ paddingBottom: 100 }}>
          <EditAvatar photoSource={photoSource.uri} setPhoto={setPhotoSource} />
          <MaterialInput
            label="Name"
            inputKey="name"
            value={clientData.name}
            onChangeValue={handleOnChangeValue}
            placeholder="Enter your name"
            error={clientData.nameError}
          />
          <MaterialInput
            keyboardType="email-address"
            label="Email"
            inputKey="email"
            value={clientData.email}
            onChangeValue={handleOnChangeValue}
            placeholder="Enter your email"
            error={clientData.emailError}
          />
          <MaterialInput
            label="Date of birth"
            inputKey="date_of_birth"
            value={clientData.date_of_birth}
            onChangeValue={handleOnChangeValue}
            placeholder="Enter your date of birth"
            error={clientData.date_of_birthError}
          />
          <Button
            text="SAVE"
            onPress={handleOnPressSave}
            loading={creatingClient || updatingClient}
          />
        </View>
      </ScrollView>
    </>
  );
};

Client.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  error: PropTypes.string,
  creatingClient: PropTypes.bool.isRequired,
  updatingClient: PropTypes.bool.isRequired,
  successCreatingClient: PropTypes.bool.isRequired,
  successUpdatingClient: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    resetInfo: PropTypes.func,
    createClient: PropTypes.func,
    updateClient: PropTypes.func,
  }).isRequired,
};

Client.defaultProps = {
  error: '',
};

const mapStoreToProps = (store) => ({
  creatingClient: store.clientReducer.creatingClient,
  successCreatingClient: store.clientReducer.successCreatingClient,
  updatingClient: store.clientReducer.updatingClient,
  successUpdatingClient: store.clientReducer.successUpdatingClient,
  error: store.clientReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      createClient: createClientAction,
      updateClient: updateClientAction,
      resetInfo: resetInfoAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Client);
