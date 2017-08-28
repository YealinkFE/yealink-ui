module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "plugins": ["html"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};