import { FC } from "react";
import { Link } from "@tanstack/react-router";

import styles from "./styles.module.scss";

const langs: Record<string, string> = {
  es: "Испанский",
  fr: "Французский",
  it: "Итальянский",
  pt: "Португальский",
  zh: "Китайский",
  ja: "Японский",
  en: "Английский",
  sw: "Суахили",
  id: "Индонезийский",
  tr: "Турецкий",
  hi: "Хинди",
};

interface ILangSelect {
  params: string[];
}

const LangSelect: FC<ILangSelect> = ({ params }) => {
  const lang = langs[params[1]];

  return (
    <div className={styles.appTitleRoot}>
      <Link to={"/" + params[1]}>{lang}</Link>
    </div>
  );
};

export default LangSelect;
