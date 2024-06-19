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

Currently, two official plugins are available for Fast Refresh functionality:

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

If you are developing a production application, it's recommended updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this in eslint:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  // and settings for eslint to detect react version for eslint-plugin-react warning: Warning: React version not specified in eslint-plugin-react settings.
  // See https://github.com/jsx-eslint/eslint-plugin-react#configuration .
  settings: {
    react: {
      version: "detect",
    },
  },
};
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

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE\_ are exposed to your Vite-processed code

Any variables exposed to your Vite source code will end up in your client bundle, VITE\_\* variables should not contain any sensitive information!

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

## Conditional build config

If the config needs to conditionally determine options based on the command (serve or build), the mode being used, it can do thad by exporting a function.

```js
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (mode === "development") {
    return {
      // dev specific config
      base: "",
      plugins: [react()],
    };
  } else {
    // mode === 'production'
    return {
      // build specific config
      base: "/fancy",
      plugins: [react()],
    };
  }
});
```

## Prettier setup

### Installation

Install prettier locally
`npm install --save-dev --save-exact prettier`

Create a empty config file named `.prettierrc` at the root of your project, or you can run this command:
`node --eval "fs.writeFileSync('.prettierrc','{}\n')"`

Prettier will follow rules specified in .gitignore if it exists in the same directory from which it is run. You can also base your .prettierignore on .eslintignore (if you have one).

But it's possible also to create a `.prettierignore` and add artifacts to ignore list (build / test artifacts like `coverage` and `dist` folders)

We will add 2 new scripts to npm

- `npm run prettier` - it will run `npx prettier . --check` to check for formatting errors.
  - Useful to have this as a failure condition in CI.
- `npm run prettier:fix` - it will format all files with prettier by running `npx prettier . --write`

### Editor configuration

For VS Code install extension `esbenp.prettier-vscode`

TIP: Create a `.vscode/extensions.json` and add extension recommendations specific to the workspace, like prettier and eslint

Create workspace configuration `.vscode/settings.json` and set prettier as default formatter and enable format on save option:

```js
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
  // you can make formatOnSave to false and turn it on only for specific languages
  // "editor.formatOnSave": false
  // "[javascript]": {
  //   "editor.formatOnSave": true
  // }
}
```

### Prettier vs Linters

Use Prettier for formatting (rules) and linters for catching bugs (code-quality rules).

- Formatting rules ex: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style…
- Code-quality rules: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors…

Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary when using Prettier, but worse – they might conflict with Prettier!

For checking rules that conflict or are unnecessary with Prettier we will use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

You can check without installing the package by running `npx eslint-config-prettier src/main.tsx`

The output looks like:

```bash
The following rules are unnecessary or might conflict with Prettier:

- no-extra-semi
- no-mixed-spaces-and-tabs

The following rules are enabled but cannot be automatically checked. See:
https://github.com/prettier/eslint-config-prettier#special-rules

- no-unexpected-multiline
```

For fixing the rules we can install eslint-config-prettier:
`npm install --save-dev eslint-config-prettier`

Add "prettier" to the "extends" array in our `.eslintrc.cjs` file.
Make sure to put it last, so it gets the chance to override other configs.

```json
  extends: [
    // other plugins
    "prettier",
  ],
```

Then when we run again `npx eslint-config-prettier src/main.tsx`
We get the message that everything is cool:

```bash
No rules that are unnecessary or conflict with Prettier were found.
```

## React Router

Start by installing react router: `npm install react-router-dom`

### Browser router

Then we create a [browser router](https://reactrouter.com/en/main/routers/create-browser-router) in our `main.tsx`

```typescript
const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <EnvVariables />,
      },
      {
        path: "page-with-error",
        element: <PageWithError />,
        errorElement: <LowerErrorElement />,
      },
      {
        path: "normal-page",
        element: <NormalPage />,
      },
    ],
  },
]);
```

I would like to highlight here:

- [`errorElement`](https://reactrouter.com/en/main/route/error-element) on root path that will catch exceptions that are thrown in loaders, actions, or component rendering (in App or it's children elements)
- child element with `index: true`. Index routes render into their parent's Outlet at their parent's URL (like a default child route).
- child element with it's own `errorElement`. Exceptions that will be caught and treated in `LowerErrorElement` are not thrown to App's error page.

### NavLinks & Links & Outlet

In `App.tsx` we will add the `<Outlet/>` element for rendering elements from child routes.

And then add client side navigation with the help of `<Link>` and `<NavLink>` elements.

- `<Link>` element lets your user navigate using client side navigation without browser doing a full transition like when we use `<a href>` (a full document reload)
- `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active", "pending", or "transitioning". Here we use the default active class that is added to `<NavLink>` when the route matches `to` prop.

```tsx
return (
  // ...
  <NavLink to={BASE_URL} end>.env variables</NavLink>
  <NavLink to="normal-page">normal page</NavLink>
  <NavLink to="page-with-error?custom=true">custom error</NavLink>
  <Link to="page-with-error">simple error</Link>
  <Link to="not-ex">non existing url</Link>
  // ...
);
```

\*\*\* On the first `NavLink` we have a special prop [`end`](https://reactrouter.com/en/main/components/nav-link#end) in order to add active class only if it's exact match.

### errorElement

When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes, the error path will be rendered (`errorElement`) and the error made available with `useRouteError`.

Our global `errorElement` is `src\pages\ErrorPage.tsx`, where using `useRouteError` we can get the error that was thrown.
By default the type of error is `unknown`, for addressing this, we need to do a type check/cast to a known error type.

We can inspire from example provided by react router `isRouteErrorResponse`

```typescript
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
export function isRouteErrorResponse(error: any): error is ErrorResponse {
  return (
    error != null &&
    typeof error.status === "number" &&
    typeof error.statusText === "string" &&
    typeof error.internal === "boolean" &&
    "data" in error
  );
}
```

ErrorResponse type:

```typescript
type ErrorResponse = {
  status: number;
  statusText: string;
  data: any;
};
```

For treating project specific error types, we can do a similar approach:

```typescript
type CustomError = {
  fancyDetails: string;
};

const isCustomErrorResponse = (error: unknown): error is CustomError => {
  return error != null && (error as CustomError).fancyDetails !== undefined;
};
```

### nested errorElement with error rethrow

Let's take a look at `src\pages\pageWithError\LowerErrorElement.tsx`

```typescript
export const LowerErrorElement = () => {
  const error = useRouteError();

  if (isCustomErrorResponse(error)) {
    // And provide specific error details for expected error
  }

  // if it's not a expected error - we should rethrow it
  throw error;
};
```

It's very important to rethrow `error` if it's not handled, otherwise the error will be "swallowed" by `LowerErrorElement` and `ErrorPage` will not have a chance to handle it.
