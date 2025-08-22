import { useAuth, useTitle } from "@/shared/lib";
import { FavoritePage } from "./ui";
import { Navigate } from "react-router-dom";

const Favorites = () => {
  const { isAuth } = useAuth();

  useTitle("Избранное");

  return <>{isAuth ? <FavoritePage /> : <Navigate to={"/filmo-poisk"} />}</>;
};

export default Favorites;
