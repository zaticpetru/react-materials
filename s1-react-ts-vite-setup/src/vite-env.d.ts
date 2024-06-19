/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY: string;
  readonly VITE_APP_LOGO: "/setting.png" | "/cost.png";
  // more env variables...
}
