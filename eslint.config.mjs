import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js globals like `require` and `__dirname`
      },
    },
  },
  pluginJs.configs.recommended,
  {
    // Disable ESLint rules that conflict with Prettier
    rules: prettier.rules,
  },
  {
    // Add Prettier as a plugin and enforce its rules
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Ensure Prettier errors show up in ESLint
    },
  },
];
