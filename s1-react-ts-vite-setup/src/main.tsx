import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EnvVariables from "pages/EnvVariables.tsx";
import ErrorPage from "pages/ErrorPage.tsx";
import { BASE_URL } from "./utils.ts";
import { LowerErrorElement, PageWithError } from "pages/pageWithError";
import { NormalPage } from "pages/NormalPage.tsx";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
