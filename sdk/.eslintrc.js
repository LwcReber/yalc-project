module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"]
      }
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'never'],
    'no-useless-constructor': 0,
    'object-curly-spacing': 1,
    'no-prototype-builtins': 0,
    'no-var': 0,
    // 'no-var': 0, // 禁用var，用let和const代替
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-new': 0,
    quotes: 0,
    'array-callback-return': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/no-use-before-define': 'off'
  }
}
