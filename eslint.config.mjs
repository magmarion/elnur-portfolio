import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Turns off warnings to avoid unnecessary warnings about unescaped characters in JSX (e.g., ' or ").
      "@typescript-eslint/quotes": "off",  // Disable strict quote checking for TypeScript
      "quotes": [0, "double", { "avoidEscape": true, "allowTemplateLiterals": true }], // Allows flexibility in quote usage
      "no-useless-escape": "off", // Disables warnings for unnecessary escape characters
      "@typescript-eslint/no-explicit-any": "off", // Temporarily disable `any` rule
      "@typescript-eslint/no-unused-vars": "off", // Temporarily disable unused variable rule
    },
  },
];

export default eslintConfig;
