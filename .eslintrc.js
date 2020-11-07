module.exports = {
  'extends': [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "bracketSpacing": true,
      }
    ],
    "react/jsx-props-no-spreading": "off"
  },
  'globals': {
    "fetch": false
  }
};
