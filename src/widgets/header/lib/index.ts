import { useAppSelector } from "@/shared/lib";

export const useAuth = () => {
  const yandexToken = useAppSelector((state) => state.auth.token);
  const googleToken = useAppSelector((state) => state.google.googleToken);
  const isAuth = !!yandexToken || !!googleToken;

  return { isAuth };
};
