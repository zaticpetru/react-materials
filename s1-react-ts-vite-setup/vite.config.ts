import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "",
//   plugins: [react()],
// });

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  console.log("CONFIG");
  console.log({ command, mode, isSsrBuild, isPreview });

  const sharedConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        pages: path.resolve(__dirname, "./src/pages"),
        types: path.resolve(__dirname, "./src/types"),
      },
    },
  };

  if (mode === "development") {
    return {
      ...sharedConfig,
      // dev specific config
      base: "/dev",
    };
  } else {
    // mode === 'production'
    return {
      ...sharedConfig,
      // build specific config
      base: "/fancy",
    };
  }
});
