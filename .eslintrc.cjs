module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  ignorePatterns: ['src/**/*.d.ts', 'vite.config.ts'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: { 'prettier/prettier': 1 },
};
