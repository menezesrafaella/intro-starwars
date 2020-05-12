module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "process": true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    "rules": {
        "indent": [2, "tab"],
        "no-tabs": 0,
        "no-console": "off",
        "no-multi-assign": "off",
        "prefer-template": "off",
        "no-plusplus": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off"
    },
    "no-unused-vars": [2, {
        "vars": "all",
        "args": "after-used"
    }],
    "parserOptions": {
        "ecmaVersion": 2015
    }
};