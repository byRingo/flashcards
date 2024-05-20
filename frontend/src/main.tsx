import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Deck from "./Deck.tsx";
import GlobalStyles from "./assets/globalStyles.ts";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>,
);
