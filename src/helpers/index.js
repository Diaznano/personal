import { Platform } from 'react-native';
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

export { validateRequiredField, isIphone, showToast };
