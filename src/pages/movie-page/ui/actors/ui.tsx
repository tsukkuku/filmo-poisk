import { Swiper, SwiperSlide } from "swiper/react";
import { useGetPersonsInfoQuery } from "@/pages/movie-page/api";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper/modules";
import style from "./style.module.scss";

interface ActorsProps {
  id: string;
}

export const Actors = ({ id }: ActorsProps) => {
  const { data: persons } = useGetPersonsInfoQuery(parseInt(id));

  if (!persons) return <div>Актеры не найдены</div>;

  return (
    <div className={style.Actors} id="actors">
      <h3 className={style.SectionTitle}>Актеры</h3>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={18}
        slidesPerView="auto"
        className={style.Swiper}
      >
        {persons
          .filter((person) => person.professionKey === "ACTOR")
          .map((person) => (
            <SwiperSlide className={style.Slide}>
              <div className={style.ActorCard}>
                <Link to={`/name/${person.staffId}`} className={style.Link}>
                  <img
                    src={person.posterUrl}
                    alt={person.nameRu || person.nameEn}
                    className={style.PersonPhoto}
                  />
                  <div className={style.PersonName}>
                    {person.nameRu || person.nameEn}
                  </div>
                  <div className={style.PersonRole}>{person.description}</div>
                  <div className={style.PersonRole}>
                    {person.professionText}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
