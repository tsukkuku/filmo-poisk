import { useState } from "react";
import { DropDown } from "../dropdown";
import style from "./style.module.scss";

interface ProfileViewProps {
  avatar: string;
  display_name: string;
  isYandex: boolean;
}

export const ProfileView = ({
  avatar,
  display_name,
  isYandex,
}: ProfileViewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={style.ProfileContainer}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={style.Avatar__Container}>
        <img src={avatar} className={style.Avatar} alt={display_name} />
      </div>
      <div className={style.Display__Name}>{display_name}</div>
      <DropDown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isYandex={isYandex}
      />
    </div>
  );
};
