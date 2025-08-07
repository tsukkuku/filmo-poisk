import { getProfileInfo } from "@/features/auth/lib";
import { useAppSelector } from "@/shared/lib";
import { DropDown } from "../dropdown";

import style from "./style.module.scss";
import { useState } from "react";

export const Profile = () => {
  const token = useAppSelector((state) => state.auth.token);
  const profile = getProfileInfo(token);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!profile) return;

  return (
    <div
      className={style.ProfileContainer}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={style.YandexAvatar__Container}>
        <img
          src={`https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/`}
          className={style.YandexAvatar}
          alt={profile.display_name}
        />
      </div>
      <div className={style.YandexDisplay__Name}>{profile?.display_name}</div>
      <DropDown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
