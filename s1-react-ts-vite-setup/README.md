# React Typescript Vite Setup

## Create a new project with Vite

Vite requires Node.js version 18+ or 20+. 
However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it

```bash
PS:> npm create vite@latest
Need to install the following packages:
create-vite@5.2.3
Ok to proceed? (y) y


> npx
> create-vite

√ Project name: ... s1-react-ts-vite-setup

# Search create-vite for more details on each supported template 

√ Select a framework: » React
√ Select a variant: » TypeScript

Done. Now run:

  cd s1-react-ts-vite-setup
  npm install
  npm run dev
```
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Check out also these [awesome community templates](https://github.com/vitejs/awesome-vite#templates)!

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

## package.json

```js
  "scripts": {
    // start dev server, aliases: `vite dev`, `vite serve`
    "dev": "vite",
    // build for production
    "build": "tsc && vite build",
    // locally preview production build
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    // added lint:fix script to fix potentially fixable eslint errors
    "lint:fix": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 --fix",
  },
```

## .env files

Vite uses dotenv to load additional environment variables from the following files in your environment directory:

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code

Any variables exposed to your Vite source code will end up in your client bundle, VITE_* variables should not contain any sensitive information!

For examples look in to:

- `.env` - Defines env vars loaded in all cases
- `.env.production` - Defines env vars in production mode
  - To test production mode run `npm run build` then `npm run preview`
- `index.html` - Showcase of using env vars in html
- `src/App.tsx` - Showcase of using env vars in Typescript

## IntelliSense for TypeScript

In `src/App.tsx` our env variables are typed as any, to fix that add a interface for your env variables in `vite-env.d.ts`

```js
interface ImportMetaEnv {
  readonly VITE_SOME_KEY: string;
  readonly VITE_APP_LOGO: string;
  // more env variables...
}
```
