import { useAuth, useTitle } from "@/shared/lib";
import { History } from "./ui/ui";
import { Navigate } from "react-router-dom";

const HistoryPage = () => {
  const { isAuth } = useAuth();

  useTitle("История просмотра");

  return <>{isAuth ? <History /> : <Navigate to={"/filmo-poisk"} />}</>;
};

export default HistoryPage;
