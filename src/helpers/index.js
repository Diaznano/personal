import { Platform, PermissionsAndroid } from 'react-native';
import Toast from 'react-native-simple-toast';

const isIphone = Platform.OS === 'ios';

const validateRequiredField = (requiredFields, fieldsValues) => {
  let error = false;
  let errors = {};
  requiredFields.map((i) => {
    if (!fieldsValues[i]) {
      error = true;
      errors = {
        ...errors,
        [`${i}Error`]: `The field ${i} is required`,
      };
    }
    return i;
  });
  return error ? errors : null;
};

const showToast = (message) => {
  return Toast.show(message, Toast.SHORT, ['UIAlertController']);
};

const checkAllPermissions = async () => {
  if (isIphone) return true;
  try {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);
    if (
      (await PermissionsAndroid.check('android.permission.CAMERA')) &&
      (await PermissionsAndroid.check('android.permission.WRITE_EXTERNAL_STORAGE')) &&
      (await PermissionsAndroid.check('android.permission.READ_EXTERNAL_STORAGE'))
    ) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export { validateRequiredField, isIphone, showToast, checkAllPermissions };
