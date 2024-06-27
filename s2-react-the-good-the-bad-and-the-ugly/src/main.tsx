import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage.tsx";
import { BASE_URL } from "./utils.ts";
import { RedundantState } from "pages/RedundantState.tsx";
import { UnnecessaryEffect } from "pages/UnnecessaryEffect.tsx";
import { Form } from "pages/Form.tsx";
import { UnnecessaryEffectTwo } from "pages/UnnecessaryEffectTwo.tsx";
import { FetchingData } from "pages/FetchingData.tsx";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: "redundant-state",
        element: <RedundantState />,
      },
      {
        path: "unnecessary-effect",
        element: <UnnecessaryEffect />,
      },
      {
        path: "unnecessary-effect-two",
        element: <UnnecessaryEffectTwo />,
      },
      {
        path: "actual-form",
        element: <Form />,
      },
      {
        path: "actual-fetching",
        element: <FetchingData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
