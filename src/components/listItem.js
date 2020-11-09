import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../assets/colors';
import OptionButton from './optionButton';
import { editIcon, trashIcon } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: colors.BLACK_TEXT,
  },
  subtitle: {
    fontSize: 12,
    color: colors.GRAY_TEXT,
    marginTop: 5,
  },
  textsContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

const ListItem = ({ item: { name, abreviature }, onPressEdit, onPressDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{name}</Text>
        {abreviature && <Text style={styles.subtitle}>{abreviature}</Text>}
      </View>
      <View style={styles.buttonsContainer}>
        <OptionButton icon={editIcon} onPress={onPressEdit} />
        <OptionButton icon={trashIcon} onPress={onPressDelete} />
      </View>
    </View>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    abreviature: PropTypes.string,
  }).isRequired,
  onPressEdit: PropTypes.func.isRequired,
  onPressDelete: PropTypes.func.isRequired,
};

export default ListItem;
