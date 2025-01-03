import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.cypress, // Adiciona variáveis globais do Cypress
      },
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      cypress: cypressPlugin,
    },
    extends: [
      "plugin:cypress/recommended", // Configuração recomendada para Cypress
    ],
    rules: {
      "cypress/no-force": "error",
      "cypress/assertion-before-screenshot": "error",
      "cypress/no-pause": "error",
    },
  },
];
