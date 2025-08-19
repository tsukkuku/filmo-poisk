import type { PersonDetails } from "@/pages/person-page/api";
import style from "./style.module.scss";

interface NameProps {
  person: PersonDetails;
}

export const Name = ({ person }: NameProps) => {
  return (
    <div className={style.PersonName__Container}>
      <div className={style.PersonRu__Name}>
        {person.nameRu || person.nameEn}
      </div>
      <div className={style.PersonEn__Name}>{person.nameEn}</div>
    </div>
  );
};
