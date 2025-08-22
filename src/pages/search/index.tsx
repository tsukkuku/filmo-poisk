import { Search } from "@/features/search";
import { useTitle } from "@/shared/lib";

const SearchPage = () => {
  useTitle("Поиск");

  return <Search />;
};

export default SearchPage;
