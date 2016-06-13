/**
 * @file Defines ESLint rules and configuration
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

// Rules
const commons = require('./rules/commons').rules;
const es6     = require('./rules/es6').rules;

module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  rules: merge([commons, es6])
};

/**
 * Merges source object with object.
 * @public
 * @param  {object} obj - Object
 * @param  {object} src - Source
 * @return {object} Object merged with source
 */
function extend(obj, src) {
  Object.keys(src).forEach(key => obj[key] = src[key]);

  return obj;
}

/**
 * Merges specified objects.
 * @public
 * @param  {array}  objects - Objects to merge
 * @return {object} A new object, result of objects merging
 */
function merge(objects) {
  return objects.reduce((acc, obj) => extend(acc, obj), {});
}
