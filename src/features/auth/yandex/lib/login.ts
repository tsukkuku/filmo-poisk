import { useState, type FormEvent } from "react";
import axios from "axios";
import { useAppDispatch, useModal } from "@/shared/lib";
import { login } from "../model";
import { generatePkce } from "./pkce";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export const useYandexLogin = (value: string) => {
  const [verified, setVerified] = useState("");
  const [inPage, setInPage] = useState(false);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const { close } = useModal();

  const redirect = async () => {
    const { codeChallenge, codeVerifier } = await generatePkce();
    setVerified(codeVerifier);
    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${CLIENT_ID}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    window.open(url);
    setInPage(true);
  };

  const getToken = async (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      setError("Поле ввода не должно быть пустым");
    }
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "authorization_code");
      params.append("code", value);
      params.append("client_id", CLIENT_ID);
      params.append("code_verifier", verified);
      const token = await axios.post("https://oauth.yandex.ru/token", params, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      });
      dispatch(login(token.data.access_token));
      setError("");
      setInPage(false);
      close();
    } catch (e) {
      if (value) {
        setError("Неверный код");
      }
    }
  };

  return { error, redirect, getToken, inPage };
};
