import { useGetMovieFactsQuery } from "@/pages/movie-page/api";
import { FactsList } from "@/widgets/facts/ui";
import { ClipLoader } from "react-spinners";

interface MovieFactsProps {
  id: string;
}

export const MovieFacts = ({ id }: MovieFactsProps) => {
  const { data: facts, isLoading, isFetching } = useGetMovieFactsQuery(id);

  if (isLoading || isFetching) return <ClipLoader color="var(--text-color)" />;
  if (!facts) return <div>Нету интересных фактов</div>;

  return <FactsList movie={facts} />;
};
