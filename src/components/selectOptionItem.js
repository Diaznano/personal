import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
});

const SelectOptionItem = ({ item, item: { name }, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);

SelectOptionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SelectOptionItem;
