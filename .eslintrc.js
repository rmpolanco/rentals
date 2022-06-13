module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'template-curly-spacing': 'off',
    'ember/no-jquery': 'off',
    curly: 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'brace-style': 'error',
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'default-case': 'error',
    'consistent-return': 'error',
    'no-return-await': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'no-useless-catch': 'error',
    'ember/no-unnecessary-index-route': 'error',
    'ember/route-path-style': 'error',
    'ember/require-computed-macros': 'error',
    'ember/no-get': 'error',
    'ember/require-computed-property-dependencies': 'error',
    'ember/order-in-components': [
      2,
      {
        order: [
          'service',
          'property',
          'init',
          'didReceiveAttrs',
          'willRender',
          'willInsertElement',
          'didInsertElement',
          'didRender',
          'didUpdateAttrs',
          'willUpdate',
          'didUpdate',
          'willDestroyElement',
          'willClearRender',
          'didDestroyElement',
          'observer',
          'single-line-function',
          'multi-line-function',
          ['method', 'empty-method'],
          'actions',
        ],
      },
    ],
    'ember/order-in-controllers': [
      2,
      {
        order: [
          'controller',
          'service',
          'query-params',
          'inherited-property',
          'property',
          'init',
          'observer',
          'single-line-function',
          'multi-line-function',
          ['method', 'empty-method'],
          'actions',
        ],
      },
    ],
    'ember/order-in-models': [
      2,
      {
        order: ['attribute', 'relationship', 'single-line-function', 'multi-line-function'],
      },
    ],
    'ember/order-in-routes': [
      2,
      {
        order: [
          'service',
          'inherited-property',
          'property',
          'beforeModel',
          'model',
          'afterModel',
          'serialize',
          'redirect',
          'activate',
          'setupController',
          'renderTemplate',
          'resetController',
          'deactivate',
          'single-line-function',
          'multi-line-function',
          ['method', 'empty-method'],
          'actions',
        ],
      },
    ],
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      }),
    },
  ],
};
