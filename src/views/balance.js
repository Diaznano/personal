import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBalanceAction } from '../redux/reports/actions';
import { Header, BalanceItem } from '../components';
import { Errors } from '../constants';

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
});

const Balance = ({
  navigation: { addListener },
  actions: { getBalance },
  fetchingBalance,
  balances,
}) => {
  useEffect(() => {
    getBalance();
  }, []);
  const renderItem = (item) => <BalanceItem item={item} />;

  const keyExtractor = (item) => `${item.id}`;

  useEffect(() => {
    const navFocusListener = addListener('didFocus', async () => {
      getBalance();
    });
    return () => {
      navFocusListener.remove();
    };
  }, []);

  return (
    <>
      <Header title="Balance" logOut />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={balances}
          keyExtractor={(item) => keyExtractor(item)}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => {
            return !fetchingBalance ? <Text>{Errors.empty}</Text> : null;
          }}
          refreshing={fetchingBalance}
          onRefresh={() => getBalance()}
        />
      </SafeAreaView>
    </>
  );
};

Balance.propTypes = {
  actions: PropTypes.shape({
    getBalance: PropTypes.func,
  }).isRequired,
  fetchingBalance: PropTypes.bool.isRequired,
  balances: PropTypes.array,
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};

Balance.defaultProps = {
  balances: [],
};

const mapStoreToProps = (store) => ({
  fetchingBalance: store.reportsReducer.fetchingBalance,
  balances: store.reportsReducer.balances,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getBalance: getBalanceAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Balance);
