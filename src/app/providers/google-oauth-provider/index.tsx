import { GoogleOAuthProvider } from "@react-oauth/google";
import type { ReactNode } from "react";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

interface GoogleOAuthProviderProps {
  children: ReactNode;
}

export const GoogleOauthProvider = ({ children }: GoogleOAuthProviderProps) => {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>{children}</GoogleOAuthProvider>
  );
};
