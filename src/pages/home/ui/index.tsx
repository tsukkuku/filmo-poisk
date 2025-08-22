import { Genres } from "./genres";
import { Comedy } from "./comedy";
import { Family } from "./family";
import { Fantasy } from "./fantasy";
import { TopMovies } from "./top-movies";
import { TopSeries } from "./top-series";
import { useTitle } from "@/shared/lib";

const Home = () => {
  useTitle("Главная");

  return (
    <>
      <Genres />
      <Comedy />
      <Fantasy />
      <Family />
      <TopMovies />
      <TopSeries />
    </>
  );
};

export default Home;
