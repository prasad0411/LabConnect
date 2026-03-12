export default [
  {
    ignores: ['public/**', 'client/dist/**', 'node_modules/**'],
  },
  {
    files: ['server/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
