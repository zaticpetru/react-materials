import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage.tsx";
import { BASE_URL } from "./utils.ts";
import { GoodExample } from "pages/GoodExample.tsx";
import { BadExample } from "pages/BadExample.tsx";
import { UglyExample } from "pages/UglyExample.tsx";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BadExample />,
      },
      {
        path: "good-example",
        element: <GoodExample />,
      },
      {
        path: "bad-example",
        element: <BadExample />,
      },
      {
        path: "ugly-example",
        element: <UglyExample />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
