// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["**/*.min.js", "sw.js", "workbox*.js"],
  },

  {
    languageOptions: {
      globals: {
        navigator: "readonly",
        window: "readonly",
      },
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);
