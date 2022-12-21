module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app', // Extends the config shipped with Gatsby.
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  ignorePatterns: [
    'node_modules/',
    '.cache',
    'public',
    '.eslintrc.js',
    'gatsby.config.js',
    'prettier.config.js',
    'stylelint.config.js',
  ],
};
