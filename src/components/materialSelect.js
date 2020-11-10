import React, { useRef } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ModalView from './modalView';
import SelectOption from './selectOption';
import colors from '../assets/colors';
import { arrowDownIcon } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: colors.PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: colors.PRIMARY_COLOR,
  },
});

const MaterialSelect = ({ data, value, onSelect }) => {
  const materialSelectRef = useRef(null);

  const openModal = () => {
    materialSelectRef.current.show();
  };

  const hideModal = () => {
    materialSelectRef?.current.close();
  };

  const onSelectItem = (item) => {
    onSelect(item);
    hideModal();
  };

  const renderArrow = () => <Image style={styles.icon} source={arrowDownIcon} />;

  return (
    <>
      <ModalView ref={materialSelectRef}>
        <SelectOption onClose={hideModal} data={data} onPressItem={onSelectItem} />
      </ModalView>
      <TouchableOpacity onPress={openModal} style={styles.container}>
        <Text>{value}</Text>
        {renderArrow()}
      </TouchableOpacity>
    </>
  );
};

MaterialSelect.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MaterialSelect;
