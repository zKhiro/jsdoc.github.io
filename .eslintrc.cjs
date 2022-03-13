/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "./eslintrc.json",
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
}
