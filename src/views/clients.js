import React, { useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ClientItem, FloatButton, Header } from '../components';
import { getClientsAction, deleteClientAction } from '../redux/client/actions';
import { Errors } from '../constants';
import { showToast } from '../helpers';

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
  icon: { height: 30, width: 30 },
});

const Clients = ({
  navigation,
  navigation: { navigate },
  actions: { getClients, deleteClient },
  clients,
  fetchingClients,
  successDeletingClient,
  error,
}) => {
  useEffect(() => {
    getClients();
  }, []);

  useEffect(() => {
    if (successDeletingClient) {
      getClients();
    }
  }, [successDeletingClient]);

  useEffect(() => {
    if (error) {
      showToast(error);
    }
  }, [error]);

  useEffect(() => {
    const navFocusListener = navigation.addListener('didFocus', async () => {
      getClients();
    });
    return () => {
      navFocusListener.remove();
    };
  }, []);

  const handleDeleteClient = (id) => {
    Alert.alert('Delete client', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => deleteClient(id),
      },
    ]);
  };

  const keyExtractor = (item) => `${item.id}`;

  const handleNewClient = () => {
    navigate('Client', { isNew: true });
  };

  const handleOnPressEdit = (item) => {
    navigate('Client', { client: item, isNew: false });
  };

  const renderItem = (item) => (
    <ClientItem
      item={item}
      onPressDelete={() => handleDeleteClient(item)}
      onPressEdit={() => handleOnPressEdit(item)}
    />
  );

  return (
    <>
      <Header title="Clients" logOut />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={clients}
          keyExtractor={(item) => keyExtractor(item)}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => {
            return !fetchingClients ? <Text>{Errors.empty}</Text> : null;
          }}
          refreshing={fetchingClients}
          onRefresh={() => getClients()}
        />
      </SafeAreaView>
      <FloatButton onPress={handleNewClient} />
    </>
  );
};

Clients.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func, addListener: PropTypes.func }).isRequired,
  actions: PropTypes.shape({ getClients: PropTypes.func, deleteClient: PropTypes.func }).isRequired,
  clients: PropTypes.array,
  fetchingClients: PropTypes.bool.isRequired,
  successDeletingClient: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Clients.defaultProps = {
  clients: [],
  error: '',
};

const mapStoreToProps = (store) => ({
  clients: store.clientReducer.clients,
  fetchingClients: store.clientReducer.fetchingClients,
  successDeletingClient: store.clientReducer.successDeletingClient,
  error: store.clientReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getClients: getClientsAction,
      deleteClient: deleteClientAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Clients);
