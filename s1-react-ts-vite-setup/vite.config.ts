import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "",
//   plugins: [react()],
// });

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

  console.log("CONFIG");
  console.log({ command, mode, isSsrBuild, isPreview })
  
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
