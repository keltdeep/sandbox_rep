module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "no-restricted-syntax": [
      2,
      {
        "selector": "ThrowStatement[argument.callee.name='Error'][argument.callee.type='Identifier'][argument.type='NewExpression']",
        "message": "Use errors from framework."
      }
    ],
    "template-curly-spacing" : "off",
    "indent" : "off",
    "no-console": 2,
    "rest-spread-spacing": [2, "never"],
    "object-shorthand": [2, "always"],
    "space-before-blocks": 2,
    "operator-linebreak": [2, "after"],
    "object-curly-newline": [2, {"consistent": true}],
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 2}],
    "new-parens": 2,
    "lines-between-class-members": [2, "always"],
    "function-paren-newline": [2, "consistent"],
    "array-bracket-newline": [2, "consistent"],
    "array-element-newline": [2, "consistent"],
    "no-sync": 2,
    "callback-return": [2, ["next", "callback", "cb"]],
    "no-shadow": 2,
    "require-await": 2,
    "prefer-promise-reject-errors": [2, {allowEmptyReject: true}],
    "no-useless-return": 2,
    "no-useless-concat": 2,
    "no-useless-catch": 2,
    "no-return-await": 2,
    "no-return-assign": 2,
    "no-new-wrappers": 2,
    "no-loop-func": 2,
    "no-caller": 2,
    "array-callback-return": 2,
    "no-setter-return": 2,
    "no-import-assign": 2,
    "no-async-promise-executor": 2,
    "no-dupe-else-if": 2,
    "no-extra-parens": [2, "all"],
    "require-atomic-updates": 0,
    "block-scoped-var": 2,
    "curly": [2, "all"],
    "dot-location": [2, "property"],
    "dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}],
    "eqeqeq": [2, "always", {"null": "ignore"}],
    "max-classes-per-file": [2, 1],
    "no-else-return": [2, {"allowElseIf": true}],
    "no-eq-null": 2,
    "no-eval": 2,
    "no-floating-decimal": 2,
    "no-labels": 2,
    "no-implicit-coercion": [2, {"allow": ["!!", "~"]}],
    "no-invalid-this": 0,
    "prefer-const": 2,
    "prefer-template": 2,
    "no-useless-computed-key": 2,
    "no-useless-rename": 2,
    "prefer-arrow-callback": 2,
    "no-throw-literal": 2,
    "yoda": 2,
    "array-bracket-spacing": 2,
    "block-spacing": [2, "always"],
    "brace-style": 2,
    "camelcase": 2,
    "comma-dangle": 2,
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": 2,
    "func-call-spacing": 2,
    "id-blacklist": [2, "e", "data", "date", "items"],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [2, {"mode": "strict", "beforeColon": false}],
    "keyword-spacing": [2, {"overrides": {"catch": {"after": false}}}],
    "max-nested-callbacks": [2, 2],
    "no-lonely-if": 2,
    "no-multi-assign": 2,
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-nested-ternary": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": [2, {"defaultAssignment": false}],
    "no-whitespace-before-property": 2,
    "object-curly-spacing": 2,
    "operator-assignment": [2, "always"],
    "prefer-object-spread": 2,
    "semi": 2,
    "semi-spacing": 2,
    "semi-style": 2,
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "wrap-regex": 2,
    "arrow-body-style": [2, "as-needed", {"requireReturnForObjectLiteral": true}],
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2, {"before": true, "after": true}],
    "generator-star-spacing": [2, {"before": false, "after": true}],
    "no-duplicate-imports": 2,
    "no-var": 2,
    "max-len": [2, 100],
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "no-tabs": 2,
    "no-unreachable": 2,
    "no-multi-spaces": 2,
    "no-proto": 2,
    "prefer-destructuring": [2, {"object": true, "array": false}],
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "symbol-description": 2,
    "no-useless-escape": 0,
    "padding-line-between-statements": [
      "error",
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
      {"blankLine": "always", "prev": "*", "next": "return" }
    ],

// nodejs

    "global-require": 2,
    "no-path-concat": 2
  },
};