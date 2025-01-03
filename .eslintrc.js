module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "arrow-body-style": "off",
    "no-console": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": "off",
    "linebreak-style": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    camelcase: "off",
    "operator-linebreak": "off",
    "import/no-extraneous-dependencies": "off",
    "no-multiple-empty-lines": "off",
    "implicit-arrow-linebreak": "off",
    "no-confusing-arrow": "off",
    "function-paren-newline": "off",
    "object-curly-newline": "off",
    "react/no-children-prop": "off",
    indent: "off",
    "react/button-has-type": "off",
    "react/jsx-boolean-value": "off",
    "react/function-component-definition": "off",
  },
};
