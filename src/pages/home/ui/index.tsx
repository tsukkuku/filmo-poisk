import { Comedy } from "./comedy";
import { Family } from "./family";
import { Fantasy } from "./fantasy";
import { Genres } from "./genres";
import { SearchInput } from "./search-input";
import { TopMovies } from "./top-movies";
import { TopSeries } from "./top-series";

const Home = () => {
  return (
    <>
      <SearchInput />
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
