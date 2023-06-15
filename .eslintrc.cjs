// Consider using pretier for formatting instead of eslint?
// Nuxt seems to want to go that way but hasn't yet.
// <https://typescript-eslint.io/linting/troubleshooting/formatting/>
// <https://github.com/nuxt/eslint-config/issues/224>
module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    // https://typescript-eslint.io/rules/member-delimiter-style/
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    // https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'Card',
        'Collapse',
        'default',
        'toc',
        'contact',
      ],
    }],
  },
}
