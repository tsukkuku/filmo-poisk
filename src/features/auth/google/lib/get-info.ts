import { useEffect, useState } from "react";
import { useAppSelector } from "@/shared/lib";
import type { GoogleProfile } from "./types";
import axios from "axios";

export const getGoogleInfo = () => {
  const token = useAppSelector((state) => state.google.googleToken);

  const [googleProfile, setIsGoogleProfile] = useState<GoogleProfile | null>(null);

  useEffect(() => {
    const getGoogleInfo = async () => {
      try {
        const response = await axios.get<GoogleProfile>(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsGoogleProfile(response.data);
      } catch (e) {
        console.error("Error");
      }
    };
    if (token) {
      getGoogleInfo();
    }
  }, [token]);

  return googleProfile;
};
