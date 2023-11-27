module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier', // Remove 'prettier/@typescript-eslint'
  ],
  rules: {
    // Add custom rules or configurations here
  },
}
