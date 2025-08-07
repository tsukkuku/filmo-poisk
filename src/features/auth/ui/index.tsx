import { useState, type ChangeEvent } from "react";

import { useYandexLogin } from "../lib";
import { FaYandex } from "react-icons/fa";
import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/Input/ui";
import { MdOutlineMail } from "react-icons/md";

import style from "./style.module.scss";

export const YandexAuth = () => {
  const [value, setValue] = useState("");

  const { error, inPage, getToken, redirect } = useYandexLogin(value);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      {!inPage ? (
        <Button onClick={redirect} className={style.YandexAuth__Button}>
          Войти через
          <div className={style.YandexLogo}>
            <FaYandex color="red" className={style.Logo} />
            <span className={style.LogoText}>ндекс</span>
          </div>
        </Button>
      ) : (
        <form className={style.Verification} onSubmit={getToken}>
          <div className={style.InputSection}>
            <Input
              error={error}
              endContent={<MdOutlineMail size={25} />}
              value={value}
              onChange={handleInput}
              placeholder="Введите код подтверждения"
            />
            {error && <p className={style.ErrorMessage}>{error}</p>}
            <p className={style.underText}>
              Код подтверждения будет в новой вкладке
            </p>
          </div>
          <Button type="submit">Отправить</Button>
        </form>
      )}
    </>
  );
};
