import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import {
  StoreProvider,
  RouteProvider,
  ThemeProvider,
  GoogleOauthProvider,
} from "./providers";

import "./styles/global.scss";
import "./styles/reset.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <GoogleOauthProvider>
          <RouteProvider />
        </GoogleOauthProvider>
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
