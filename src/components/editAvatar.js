import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

import colors from '../assets/colors';
import { editIcon } from '../assets/images';
import { checkAllPermissions } from '../helpers';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginRight: 10,
    width: 125,
    height: 125,
  },
  photo: {
    width: 123,
    height: 123,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: colors.PRIMARY_COLOR,
  },
});

const EditAvatar = ({ photoSource, setPhoto }) => {
  const openCamera = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      quality: 0.3,
    };

    const checkPermissions = await checkAllPermissions();
    if (checkPermissions) {
      ImagePicker.launchCamera(options, (response) => {
        const { uri, data } = response;
        setPhoto({ uri, data });
      });
    }
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: photoSource }}
        style={styles.photo}
        borderRadius={100}
      />
      <TouchableOpacity onPress={openCamera} style={styles.iconContainer}>
        <Image source={editIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

EditAvatar.propTypes = {
  photoSource: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
};

export default EditAvatar;
