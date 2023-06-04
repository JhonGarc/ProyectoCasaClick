module.exports = {
  env: {
    node: true,
  },
  // Avoids the eslint: no-undef in "<script setup>" compiler macros
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": "error",
    'vue/require-default-prop': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/prefer-import-from-vue': 'off',
    'vue/valid-attribute-name': 'off',
    'prettier/prettier': ['warn'],
    'vue/multi-word-component-names': ['off'],
  },
}
