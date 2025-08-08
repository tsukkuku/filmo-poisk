import { useAppDispatch, useModal } from "@/shared/lib";
import { Button } from "@/shared/ui";

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../model";

import style from "./style.module.scss";

export const GoogleAuth = () => {
  const { close } = useModal();
  const dispatch = useAppDispatch();

  const getAccessToken = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(googleLogin(tokenResponse.access_token)), close();
    },
  });

  return (
    <Button
      className={style.GoogleAuth__Button}
      onClick={() => getAccessToken()}
    >
      Войти через
      <div className={style.GoogleLogo}>
        <FcGoogle size={28} className={style.Logo} />
        <span className={style.LogoText}>oogle</span>
      </div>
    </Button>
  );
};
