import React, { useEffect } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ClientItem, Header } from '../components';
import { addCircle } from '../assets/images';
import { getClientsAction, deleteClientAction } from '../redux/client/actions';
import { Errors } from '../constants';

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
}) => {
  useEffect(() => {
    getClients();
  }, []);

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
      onPressDelete={() => handleDeleteClient(item.id)}
      onPressEdit={() => handleOnPressEdit(item)}
    />
  );

  const renderAddClient = () => (
    <TouchableOpacity onPress={handleNewClient}>
      <Image source={addCircle} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <>
      <Header title="Clients" renderRigthButton={renderAddClient} />
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
    </>
  );
};

Clients.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func, addListener: PropTypes.func }).isRequired,
  actions: PropTypes.shape({ getClients: PropTypes.func, deleteClient: PropTypes.func }).isRequired,
  clients: PropTypes.array,
  fetchingClients: PropTypes.bool.isRequired,
};

Clients.defaultProps = {
  clients: [],
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
