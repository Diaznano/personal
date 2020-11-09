import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
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
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    color: colors.BLACK,
  },
  email: {
    fontSize: 11,
    color: colors.GRAY,
    marginTop: 5,
  },
  date_of_birth: {
    fontSize: 9,
    color: colors.GRAY,
    marginTop: 5,
  },
  textsContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  photoContainer: {
    alignSelf: 'flex-start',
    marginRight: 10,
    width: 42,
    height: 42,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
  },
  photo: {
    width: 40,
    height: 40,
  },
});

const ClientItem = ({
  item: { name, email, date_of_birth: dateBirth, photo_url: uri },
  onPressEdit,
  onPressDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image resizeMode="cover" source={{ uri }} style={styles.photo} borderRadius={50} />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.date_of_birth}>{dateBirth}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <OptionButton icon={editIcon} onPress={onPressEdit} />
        <OptionButton icon={trashIcon} onPress={onPressDelete} />
      </View>
    </View>
  );
};

ClientItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    date_of_birth: PropTypes.string,
    photo_url: PropTypes.string,
  }).isRequired,
  onPressDelete: PropTypes.func.isRequired,
  onPressEdit: PropTypes.func.isRequired,
};

export default ClientItem;
