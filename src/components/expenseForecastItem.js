import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../assets/colors';
import { arrowBalanceIcon } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountNameContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  accountName: {
    fontSize: 16,
    color: colors.BLACK,
  },
  subtitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: colors.BLACK,
  },
  currency: {
    fontSize: 12,
    color: colors.GRAY,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 12,
    height: 12,
    tintColor: colors.GREEN,
  },
  iconRed: {
    tintColor: colors.ERROR,
    transform: [{ rotate: '180deg' }],
  },
});

const ExpenseForecastItem = ({
  item: {
    account_name: accountName,
    currency,
    label_next_month: nextMonth,
    label_next_month_amount: nextMonthAmount,
    label_next_month_percent: nextMonthPercent,
    label_last_month: lastMonth,
    label_last_month_amount: lastMonthAmount,
    label_two_months_ago: twoMonthsAgo,
    label_two_months_ago_amount: twoMonthsAgoAmount,
  },
}) => {
  const isNegative = () => nextMonthPercent.includes('-');

  return (
    <View style={styles.container}>
      <View style={styles.accountNameContainer}>
        <Text style={styles.accountName}>{accountName}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{`${nextMonth}: ${nextMonthAmount} (${currency})`}</Text>
          <View style={styles.row}>
            <Text style={styles.subtitle}>{`${nextMonthPercent}`}</Text>
            <Image
              source={arrowBalanceIcon}
              style={[styles.icon, isNegative() && styles.iconRed]}
            />
          </View>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View style={styles.row}>
          <Text style={styles.currency}>{`${lastMonth}: `}</Text>
          <Text style={styles.subtitle}>{`${lastMonthAmount}`}</Text>
          <Text style={styles.currency}>{` (${currency})`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.currency}>{`${twoMonthsAgo}: `}</Text>
          <Text style={styles.subtitle}>{`${twoMonthsAgoAmount}`}</Text>
          <Text style={styles.currency}>{` (${currency})`}</Text>
        </View>
      </View>
    </View>
  );
};

ExpenseForecastItem.propTypes = {
  item: PropTypes.shape({
    account_name: PropTypes.string,
    label_last_month: PropTypes.string,
    label_last_month_amount: PropTypes.string,
    label_two_months_ago: PropTypes.string,
    label_two_months_ago_amount: PropTypes.string,
    currency: PropTypes.string,
    label_next_month: PropTypes.string,
    label_next_month_amount: PropTypes.string,
    label_next_month_percent: PropTypes.string,
  }).isRequired,
};

export default ExpenseForecastItem;
