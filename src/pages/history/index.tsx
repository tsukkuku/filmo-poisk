import { useAuth } from "@/shared/lib";
import { History } from "./ui/ui";
import { Navigate } from "react-router-dom";

const HistoryPage = () => {
  const { isAuth } = useAuth();

  return <>{isAuth ? <History /> : <Navigate to={"/"} />}</>;
};

export default HistoryPage;
