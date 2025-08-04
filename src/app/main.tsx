import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { StoreProvider, RouteProvider } from "./providers";

import "./styles/global.scss";
import "./styles/reset.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <RouteProvider />
    </StoreProvider>
  </StrictMode>
);
