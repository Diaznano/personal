import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../assets/colors';
import { arrowBalanceIcon, editIcon, trashIcon } from '../assets/images';
import OptionButton from './optionButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  category: {
    fontSize: 16,
    color: colors.BLACK,
  },
  type: {
    fontSize: 11,
    color: colors.GRAY,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: 12,
    color: colors.LIGHT_GRAY,
  },
  currency: {
    fontSize: 12,
    color: colors.GRAY,
  },
  balanceContainer: {
    alignItems: 'center',
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
  grayText: {
    fontSize: 12,
    color: colors.GRAY,
  },
  blackText: {
    fontSize: 12,
    color: colors.BLACK,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const MovementItem = ({
  item: { id, type, category, date, amount, currency, accounts, title, description },
  showActions,
  onPressEdit,
  onPressDelete,
}) => {
  const isNegative = () => type === 'Egreso';

  const generateBalanceText = () => {
    const balanceText = accounts.map((account, index) => {
      return (
        <>
          {index !== 0 && <Text>+</Text>}
          <Text style={styles.blackText}>{`${account.balance} `}</Text>
          <Text>{`${account.currency} `}</Text>
        </>
      );
    });
    return balanceText;
  };

  const renderBalance = () => {
    return accounts.length > 0 ? (
      <View style={styles.balanceContainer}>
        <Text style={styles.grayText}>Balance: {generateBalanceText()}</Text>
      </View>
    ) : null;
  };

  const renderMovementText = () => {
    return title && description ? (
      <Text style={[styles.blackText, { marginTop: 5 }]}>
        {`${title} - `} <Text style={styles.grayText}>{description}</Text>
      </Text>
    ) : null;
  };

  return (
    <View key={id} style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <View style={styles.column}>
            {category && <Text style={styles.category}>{category}</Text>}
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.typeContainer}>
              <Text style={styles.type}>{type}</Text>
              <Image
                source={arrowBalanceIcon}
                style={[styles.icon, isNegative() && styles.iconRed]}
              />
            </View>
            <Text style={styles.category}>
              {amount} <Text style={styles.currency}>{`(${currency})`}</Text>
            </Text>
          </View>
        </View>
        {renderBalance()}
        {renderMovementText()}
      </View>
      {showActions && (
        <View style={styles.buttonsContainer}>
          <OptionButton icon={editIcon} onPress={onPressEdit} />
          <OptionButton icon={trashIcon} onPress={onPressDelete} />
        </View>
      )}
    </View>
  );
};

MovementItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    accounts: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  showActions: PropTypes.bool.isRequired,
  onPressEdit: PropTypes.func.isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

export default MovementItem;
