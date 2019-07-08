module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    window: true,
    document: true,
    localStorage: true,
  },
  rules: {
    "no-restricted-syntax": 0,
  },
};
