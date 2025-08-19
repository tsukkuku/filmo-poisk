import { useParams } from "react-router-dom";
import { useGetPersonQuery } from "../api";
import { ClipLoader } from "react-spinners";
import { Name } from "./name";
import { Info } from "./info";
import { Facts } from "./facts/ui";
import { PersonMovies } from "./person-movies";
import style from "./style.module.scss";

const PersonPage = () => {
  const { id = "" } = useParams();
  const { data: person, isLoading, isFetching } = useGetPersonQuery(id);

  if (isLoading || isFetching) return <ClipLoader color="var(--text-color)" />;
  if (!person) return <div>Актер не найден</div>;

  return (
    <div className={style.PersonPage}>
      <Name person={person} />
      <Info person={person} />
      <Facts person={person} />
      <PersonMovies person={person} />
    </div>
  );
};

export default PersonPage;
