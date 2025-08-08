import axios from "axios";
import { useEffect, useState } from "react";
import type { ProfileInfo } from "./types";
import { useAppSelector } from "@/shared/lib";

export const getYandexInfo = () => {
  const token = useAppSelector((state) => state.auth.token);

  const [profile, setIsProfile] = useState<ProfileInfo | null>(null);

  useEffect(() => {
    const profileInfo = async () => {
      try {
        const response = await axios.get<ProfileInfo>(
          `https://login.yandex.ru/info?format=json`,
          {
            headers: {
              Authorization: `OAuth ${token}`,
            },
          }
        );
        setIsProfile(response.data);
      } catch (e) {
        console.error("Error");
      }
    };
    if (token) {
      profileInfo();
    }
  }, [token]);

  return profile;
};
