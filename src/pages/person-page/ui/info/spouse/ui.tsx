import { Link } from "react-router-dom";
import type { Spouse } from "@/pages/person-page/api";
import { getChildrenCountWithWord } from "../lib";
import style from "./style.module.scss";

interface SpouseProps {
  spouse: Spouse;
}

export const SpouseInfo = ({ spouse }: SpouseProps) => {
  return (
    <div className={style.Spouse}>
      <Link className={style.SpouseName} to={`/name/${spouse.personId}`}>
        {spouse.name}
      </Link>
      {spouse.divorced && (
        <div className={style.Divorced}>{spouse.divorcedReason}</div>
      )}
      {spouse.children > 0 && (
        <div className={style.Divorced}>
          {getChildrenCountWithWord(spouse.children)}
        </div>
      )}
    </div>
  );
};
