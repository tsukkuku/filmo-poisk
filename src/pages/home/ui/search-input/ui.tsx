import { Input } from "@/shared/ui";
import { FaSearch } from "react-icons/fa";
import style from "./style.module.scss";

export const SearchInput = () => {
  return (
    // Завтра функционал сделать
    <div className={style.SearchInput}>
      <Input
        placeholder="Введите название фильма или сериала"
        startContent={<FaSearch size={25} />}
      />
    </div>
  );
};
