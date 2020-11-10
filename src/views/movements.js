import React, { useEffect } from 'react';
import { Alert, FlatList, SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, MovementItem, FloatButton } from '../components';
import { Errors } from '../constants';
import { deleteMovementAction, getMovementsAction } from '../redux/movements/actions';

const Movements = ({
  navigation: { navigate },
  fetchingMovements,
  movements,
  successDeletingMovement,
  actions: { getMovements, deleteMovement },
}) => {
  useEffect(() => {
    getMovements();
  }, []);

  useEffect(() => {
    if (successDeletingMovement) {
      getMovements();
    }
  }, [successDeletingMovement]);

  const handleDeleteMovement = (id) => {
    Alert.alert('Delete movement', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => deleteMovement(id),
      },
    ]);
  };

  const handleEditMovement = (item) => {
    navigate('Movement', { movement: item, isNew: false });
  };

  const renderItem = (item) => (
    <MovementItem
      item={item}
      showActions
      onPressEdit={() => handleEditMovement(item)}
      onPressDelete={() => handleDeleteMovement(item)}
    />
  );

  const keyExtractor = (item) => `${item.id}`;

  const handleNewMovement = () => {
    navigate('Movement', { isNew: true });
  };

  return (
    <>
      <Header title="Movements" logOut />
      <SafeAreaView style={{ margin: 20, flex: 1 }}>
        <FlatList
          data={movements}
          keyExtractor={(item) => keyExtractor(item)}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => {
            return !fetchingMovements ? <Text>{Errors.empty}</Text> : null;
          }}
          contentContainerStyle={{ paddingBottom: 50 }}
          refreshing={fetchingMovements}
          onRefresh={() => getMovements()}
        />
      </SafeAreaView>
      <FloatButton onPress={handleNewMovement} />
    </>
  );
};

Movements.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  fetchingMovements: PropTypes.bool.isRequired,
  movements: PropTypes.array.isRequired,
  successDeletingMovement: PropTypes.bool.isRequired,
  actions: PropTypes.shape({ getMovements: PropTypes.func, deleteMovement: PropTypes.func })
    .isRequired,
};

const mapStoreToProps = (store) => ({
  movements: store.movementsReducer.movements,
  fetchingMovements: store.movementsReducer.fetchingMovements,
  successDeletingMovement: store.movementsReducer.successDeletingMovement,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      deleteMovement: deleteMovementAction,
      getMovements: getMovementsAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Movements);
