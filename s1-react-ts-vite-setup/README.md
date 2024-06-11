# React Typescript Vite Setup

## Create a new project with Vite

```bash
PS:> npm create vite@latest
Need to install the following packages:
create-vite@5.2.3
Ok to proceed? (y) y


> npx
> create-vite

√ Project name: ... s1-react-ts-vite-setup
√ Select a framework: » React
√ Select a variant: » TypeScript

Done. Now run:

  cd s1-react-ts-vite-setup
  npm install
  npm run dev
```
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Plugins configuration

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

We will use @vitejs/plugin-react

## Expanding the ESLint configuration

Update to es2021 in:

- `.eslintrc.cjs`
- `tsconfig.json`

Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```bash
npm install eslint eslint-plugin-react --save-dev
```

Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this in eslint:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  // and settings for eslint to detect react version for eslint-plugin-react warning: Warning: React version not specified in eslint-plugin-react settings. See https://github.com/jsx-eslint/eslint-plugin-react#configuration .
  settings: {
    react: {
      version: 'detect',
    },
  },
}
```
