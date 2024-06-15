module.exports = {
  root: true,
  // updated module from es2020 to es2021
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    // installed and added eslint-plugin-react
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    // replaced plugin:@typescript-eslint/recommended to plugin:@typescript-eslint/recommended-type-checked
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  // enabled type aware lint rules with parserOptions config for production application
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  // added settings for eslint to detect react version for eslint-plugin-react
  // fixes -> Warning: React version not specified in eslint-plugin-react settings.
  // see https://github.com/jsx-eslint/eslint-plugin-react#configuration .
  settings: {
    react: {
      version: "detect",
    },
  },
};
