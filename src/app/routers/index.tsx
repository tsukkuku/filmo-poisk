import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("@/pages/home/ui"));
const Favorites = lazy(() => import("@/pages/favorites"));
const Search = lazy(() => import("@/pages/search"));
const Movie = lazy(() => import("@/pages/movie-page/ui"));
const Person = lazy(() => import("@/pages/person-page/ui"));
const History = lazy(() => import("@/pages/history"));
const Movies = lazy(() => import("@/pages/movies/ui"));

export const router = createBrowserRouter([
  {
    path: "/filmo-poisk",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "favorites", Component: Favorites },
      { path: "films", Component: Movies },
      { path: "search", Component: Search },
      { path: "history", Component: History },
      { path: "film/:id", Component: Movie },
      { path: "name/:id", Component: Person },
    ],
  },
]);
