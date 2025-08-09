import { SearchInput } from "./search-input";
import { Genres } from "./genres";
import { Comedy } from "./comedy";
import { Family } from "./family";
import { Fantasy } from "./fantasy";
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
