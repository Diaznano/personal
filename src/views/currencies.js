import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  Text,
  SafeAreaView,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCircle } from '../assets/images';
import { Header, ListItem } from '../components';
import { Errors } from '../constants';
import { deleteCurrencyAction, getCurrenciesAction } from '../redux/currency/actions';
import { showToast } from '../helpers';

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
  icon: { width: 30, height: 30 },
});

const Currencies = ({
  navigation,
  navigation: { navigate },
  actions: { getCurrencies, deleteCurrency },
  currencies,
  successDeletingCurrency,
  error,
  loading,
}) => {
  useEffect(() => {
    getCurrencies();
  }, []);

  useEffect(() => {
    const navFocusListener = navigation.addListener('didFocus', async () => {
      getCurrencies();
    });
    return () => {
      navFocusListener.remove();
    };
  }, []);

  useEffect(() => {
    if (successDeletingCurrency) {
      getCurrencies();
    }
  }, [successDeletingCurrency]);

  useEffect(() => {
    if (error !== '') {
      showToast(error);
    }
  }, [error]);

  const handleDeleteCurrency = (id) => {
    Alert.alert('Delete currency', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => deleteCurrency(id),
      },
    ]);
  };

  const handleEditCurrency = (item) => {
    navigate('Currency', { currency: item, isNew: false });
  };

  const renderItem = (item) => (
    <ListItem
      item={item}
      onPressDelete={() => handleDeleteCurrency(item.id)}
      onPressEdit={() => handleEditCurrency(item)}
    />
  );

  const keyExtractor = (item) => `${item.id}`;

  const handleNewCurrency = () => {
    navigate('Currency', { isNew: true });
  };

  const renderAddCurrency = () => (
    <TouchableOpacity onPress={handleNewCurrency}>
      <Image source={addCircle} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <>
      <Header title="Currencies" renderRigthButton={renderAddCurrency} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={currencies}
          keyExtractor={(item) => keyExtractor(item)}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => {
            return !loading ? <Text>{Errors.empty}</Text> : null;
          }}
          refreshing={loading}
          onRefresh={() => getCurrencies()}
        />
      </SafeAreaView>
    </>
  );
};

Currencies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    addListener: PropTypes.func,
  }).isRequired,
  actions: PropTypes.shape({
    getCurrencies: PropTypes.func,
    deleteCurrency: PropTypes.func,
  }).isRequired,
  currencies: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  successDeletingCurrency: PropTypes.bool.isRequired,
};

Currencies.defaultProps = {
  error: '',
  currencies: [],
};

const mapStoreToProps = (store) => ({
  currencies: store.currencyReducer.currencies,
  loading: store.currencyReducer.fetchingCurrencies,
  successDeletingCurrency: store.currencyReducer.successDeletingCurrency,
  error: store.currencyReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getCurrencies: getCurrenciesAction,
      deleteCurrency: deleteCurrencyAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Currencies);
