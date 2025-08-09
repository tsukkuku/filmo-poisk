import { FaGun } from "react-icons/fa6";
import { GiBoots, GiMagicSwirl } from "react-icons/gi";
import { LuDrama, LuSwords } from "react-icons/lu";
import { PiDetectiveLight, PiKnifeFill } from "react-icons/pi";
import { RiBearSmileLine, RiCriminalLine, RiGhostFill } from "react-icons/ri";
import { TbBrandFunimation } from "react-icons/tb";

export const genres = [
  {
    genre: "Триллер",
    icon: <PiKnifeFill size={20} />,
  },
  {
    genre: "Драма",
    icon: <LuDrama size={20} />,
  },
  {
    genre: "Криминал",
    icon: <RiCriminalLine size={20} />,
  },
  {
    genre: "Детектив",
    icon: <PiDetectiveLight size={20} />,
  },
  {
    genre: "Фантастика",
    icon: <GiMagicSwirl size={20} />,
  },
  {
    genre: "Приключения",
    icon: <GiBoots size={20} />,
  },
  {
    genre: "Боевик",
    icon: <FaGun size={20} />,
  },
  {
    genre: "Фэнтези",
    icon: <LuSwords size={20} />,
  },
  {
    genre: "Комедия",
    icon: <TbBrandFunimation size={20} />,
  },
  {
    genre: "Ужасы",
    icon: <RiGhostFill size={20} />,
  },
  {
    genre: "Мультфильм",
    icon: <RiBearSmileLine size={20} />,
  },
];
