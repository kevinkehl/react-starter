module.exports = {
  'extends': 'eslint-config-brigade/react',

  'globals': {
    '__DEV__': false,
    '__EDGE__': false,
    '__STAGING__': false,
    'diffux': false,

    'afterEach': false,
    'beforeEach': false,
    'describe': false,
    'expect': false,
    'it': false,
    'jasmine': false,
    'spyOn': false,
    'xit': false,
    'xdescribe': false,
  },

  'rules': {
    'max-nested-callbacks': [2, 6],
  },
};
