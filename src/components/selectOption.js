import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import SelectOptionItem from './selectOptionItem';
import { Errors } from '../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    paddingVertical: 100,
    paddingHorizontal: 30,
  },
  wrapper: {
    height: '100%',
    justifyContent: 'center',
  },
  viewContainer: {
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyText: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 16,
  },
});
const SelectOption = ({ data, onClose, onPressItem }) => {
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback>
            <View style={styles.viewContainer}>
              <FlatList
                data={data}
                renderItem={({ item }) => <SelectOptionItem item={item} onPress={onPressItem} />}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => <Text style={styles.emptyText}>{Errors.empty}</Text>}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

SelectOption.propTypes = {
  data: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SelectOption;
