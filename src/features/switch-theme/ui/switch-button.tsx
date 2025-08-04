import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { setTheme } from "../model";
import { LuMoon, LuSun } from "react-icons/lu";

export const SwitchButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const changeTheme = () => {
    dispatch(setTheme());
  };

  return (
    <>
      <div onClick={changeTheme}>
        {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
      </div>
    </>
  );
};
