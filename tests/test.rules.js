/**
 * @file Test rules
 * @author StefanoMagrassi <stefano.magrassi@gmail.com>
 */

const test = require('tape');

const rules      = require('../index').rules;
const toBeTested = require('./helpers/to-be-tested');
const hasError   = require('./helpers/has-error');

test('ESLint rules', t => {

  t.test('Brace style - opening braces on the same line of statement/declaration', st => {
    st.plan(2);

    const rule = toBeTested(rules, 'brace-style');
    const codeOK = 'if (foo) {\nbar()\n} else {\nbaz()\n}';
    const codeKO = 'if (foo) { bar() }';

    st.notOk(hasError(codeOK, rule), 'ok when code adhere to rule');
    st.ok(hasError(codeKO, rule), 'error when code does not adhere to rule');
  });

  t.end();
});
