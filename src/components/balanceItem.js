import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../assets/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    marginBottom: 20,
  },
  accountNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountName: {
    fontSize: 16,
    color: colors.BLACK,
  },
  currency: {
    fontSize: 12,
    color: colors.GRAY,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  balance: {
    fontSize: 12,
    color: colors.BLACK,
  },
  incomes: {
    fontSize: 11,
    color: colors.GRAY,
  },
});

const BalanceItem = ({
  item: {
    account_name: accountName,
    currency,
    label_balance: balance,
    label_total_egresos: totalEgresos,
    label_total_ingresos: totalIngresos,
  },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.accountNameContainer}>
        <Text style={styles.accountName}>{accountName}</Text>
        <Text style={styles.currency}>{`(${currency})`}</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text>{`Balance: $${balance}`}</Text>
        <Text style={styles.incomes}>{`Total revenues: $${totalEgresos}`}</Text>
        <Text style={styles.incomes}>{`Total expenses: $${totalIngresos}`}</Text>
      </View>
    </View>
  );
};

BalanceItem.propTypes = {
  item: PropTypes.shape({
    account_name: PropTypes.string,
    currency: PropTypes.string,
    label_balance: PropTypes.string,
    label_total_egresos: PropTypes.string,
    label_total_ingresos: PropTypes.string,
  }).isRequired,
};

export default BalanceItem;
