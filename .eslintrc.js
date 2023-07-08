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
    "import/no-cycle": 0,
    "no-console": 0,
    "react/props-types": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "import/prefer-default-expport": 0,
    "max-len": [2, 250],
    "object-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx/ally/click-events-have-key-events": 0,
    "jsx/allyalt-text": 0,
    "jsx/ally/no-autofocus": 0,
    "jsx/ally/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "no-sparse-arrays": 0,
    "no-array-index-key": 0,
    camelcase: 0,
  },
};
