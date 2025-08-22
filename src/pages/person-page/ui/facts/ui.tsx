import { FactsList } from "@/widgets/facts";
import type { PersonDetails } from "@/pages/person-page/api";
import style from "./style.module.scss";

interface FactsProps {
  person: PersonDetails;
}

export const Facts = ({ person }: FactsProps) => {
  return (
    <div className={style.PersonFacts}>
      <FactsList person={person.facts} isMovie={false} />
    </div>
  );
};
