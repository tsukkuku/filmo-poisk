import { InfoRow } from "@/widgets/info-row";
import { formatDate } from "@/shared/lib";
import type { PersonDetails } from "@/pages/person-page/api";
import { getAgeWithWord } from "./lib";
import { SpouseInfo } from "./spouse";
import style from "./style.module.scss";

interface PersonInfoProps {
  person: PersonDetails;
}

export const Info = ({ person }: PersonInfoProps) => {
  return (
    <div className={style.PersonInfo__Section}>
      <div className={style.Person__Poster}>
        <img
          src={person.posterUrl}
          alt={person.nameRu || person.nameEn}
          className={style.Poster}
        />
      </div>
      <div className={style.Info}>
        <InfoRow title="Профессия">{person.profession}</InfoRow>
        <InfoRow title="Пол">
          {person.sex === "MALE" ? "Мужчина" : "Женщина"}
        </InfoRow>
        <InfoRow title="Дата рождение">{formatDate(person.birthday)}</InfoRow>
        <InfoRow title="Возраст">{getAgeWithWord(person.age)}</InfoRow>
        {person.death && (
          <InfoRow title="Дата смерти">{formatDate(person.death)}</InfoRow>
        )}
        <InfoRow title="Место рождения">{person.birthplace}</InfoRow>
        {person.deathplace && (
          <InfoRow title="Место смерти">{person.deathplace}</InfoRow>
        )}
        {person.growth > 0 && (
          <InfoRow title="Рост">{person.growth} см</InfoRow>
        )}
        {person.hasAwards > 0 && (
          <InfoRow title="Награды">{person.hasAwards} шт.</InfoRow>
        )}
        {person.spouses.length > 0 && (
          <InfoRow title="Супруги" variant="column">
            {person.spouses.map((spouse) => (
              <SpouseInfo spouse={spouse} key={spouse.personId} />
            ))}
          </InfoRow>
        )}
      </div>
    </div>
  );
};
