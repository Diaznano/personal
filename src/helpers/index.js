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

export { validateRequiredField };
