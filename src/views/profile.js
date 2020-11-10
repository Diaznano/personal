import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, EditAvatar, Header, MaterialInput } from '../components';
import { validateRequiredField } from '../helpers';
import { updateClientAction, resetInfoAction, getProfileAction } from '../redux/client/actions';

const Profile = ({
  client,
  successUpdatingClient,
  fetchingClient,
  updatingClient,
  actions: { updateClient, resetInfo, getProfile },
}) => {
  const [photoSource, setPhotoSource] = useState({
    uri: '',
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
    getProfile();
  }, []);

  useEffect(() => {
    if (client) {
      setClientData(client);
      setPhotoSource({ uri: client.photo_url, data: '' });
    }
  }, [client]);

  useEffect(() => {
    if (successUpdatingClient) {
      resetInfo();
    }
  }, [successUpdatingClient]);

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

  const handleUpdateProfile = () => {
    if (!validateFields()) {
      const data = {
        name: clientData.name,
        email: clientData.email,
        date_of_birth: clientData.date_of_birth,
        photo_url: photoSource.data,
      };
      updateClient(data);
    }
  };

  return (
    <>
      <Header title="Profile" logOut />
      {client && !fetchingClient && (
        <ScrollView style={{ margin: 20, flex: 1 }} showsVerticalScrollIndicator={false}>
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
            <Button text="SAVE" onPress={handleUpdateProfile} loading={updatingClient} />
          </View>
        </ScrollView>
      )}
    </>
  );
};

Profile.propTypes = {
  client: PropTypes.shape({
    photo_url: PropTypes.string,
  }).isRequired,
  successUpdatingClient: PropTypes.bool.isRequired,
  fetchingClient: PropTypes.bool.isRequired,
  updatingClient: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    updateClient: PropTypes.func,
    resetInfo: PropTypes.func,
    getProfile: PropTypes.func,
  }).isRequired,
};

const mapStoreToProps = (store) => ({
  client: store.clientReducer.client,
  fetchingClient: store.clientReducer.fetchingClient,
  updatingClient: store.clientReducer.updatingClient,
  successUpdatingClient: store.clientReducer.successUpdatingClient,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      updateClient: updateClientAction,
      resetInfo: resetInfoAction,
      getProfile: getProfileAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Profile);
