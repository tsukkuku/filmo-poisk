import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

import style from "./styles.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.MainSection}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
