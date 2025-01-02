module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 'warning',
  },
};
