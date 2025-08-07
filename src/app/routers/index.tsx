import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("@/pages/home/ui"));
const Favorites = lazy(() => import("@/pages/favorites"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "favorites", Component: Favorites },
    ],
  },
]);
