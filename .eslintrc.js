module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    '@nuxtjs',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'vue/multi-word-component-names': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.vue'],
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '~': './'
        },
        extensions: ['.js', '.vue']
      }
    }
  }
};
