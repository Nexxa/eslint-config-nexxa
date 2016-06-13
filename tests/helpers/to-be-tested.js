/**
 * @file Get the rule to be tested from list.
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

/**
 * Gets the rule to be tested from a list of rules.
 * @public
 * @param  {object} list - List of rules
 * @param  {string} name - Rule's name
 * @return {object} The ESLint config object to be tested
 */
function toBeTested(list, name) {
  const rule = list[name];

  if (typeof rule === 'undefined') {
    throw new Error('no rules match name');
  }

  const output = { rules: {} };
  output.rules[name] = rule;

  return output;
}

module.exports = toBeTested;
