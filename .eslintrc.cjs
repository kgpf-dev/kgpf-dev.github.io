module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // "eslint:recommended",
    // "plugin:prettier/recommended",
    // "prettier",
  ],
  rules: {
    // https://typescript-eslint.io/rules/member-delimiter-style/
    // Consider using pretier?
    // https://typescript-eslint.io/linting/troubleshooting/formatting/
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/multi-word-component-names': 'off',
    // 'vue/multi-word-component-names': ['error', {
    //   ignores: [
    //     'Card',
    //     'Collapse',
    //     'default',
    //     'toc',
    //     'contact',
    //   ],
    // }],
  },
}
