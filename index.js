module.exports = {
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      2,
      2, {
        "VariableDeclarator": 2
      }
    ],
    "one-var": [2, "never"],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"]
  },
  "env": {
    "browser": true
  }
};
