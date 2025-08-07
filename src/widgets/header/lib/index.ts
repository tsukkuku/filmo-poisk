import { useAppSelector } from "@/shared/lib";

export const useAuth = () => {
  const token = useAppSelector((state) => state.auth.token);
  const isAuth = !!token;

  return { isAuth };
};
