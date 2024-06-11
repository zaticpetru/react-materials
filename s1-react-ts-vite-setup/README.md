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