import { Link, useRouterState } from "@tanstack/react-router";

import styles from "./styles.module.scss";

const langs: Record<string, boolean> = {
  es: true,
  fr: true,
  it: true,
  pt: true,
  zh: true,
  ja: true,
  en: true,
  sw: true,
  id: true,
  tr: true,
  hi: true,
};

const LangSelect = () => {
  const url = useRouterState();
  const params = url.location.pathname.split("/");
  const restPath = langs[params[1]] ? "/" + params.slice(2).join("/") : "";

  return (
    <div>
      <div>
        <div className={styles.lang}>
          <div>
            <Link to={"/es" + restPath} className="[&.active]:font-bold">
              Es
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/fr" + restPath} className="[&.active]:font-bold">
              Fr
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/it" + restPath} className="[&.active]:font-bold">
              It
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/pt" + restPath} className="[&.active]:font-bold">
              Pt
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/zh" + restPath} className="[&.active]:font-bold">
              Zh
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/ja" + restPath} className="[&.active]:font-bold">
              Ja
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.lang}>
          <div>
            <Link to={"/en" + restPath} className="[&.active]:font-bold">
              En
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/sw" + restPath} className="[&.active]:font-bold">
              Sw
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/id" + restPath} className="[&.active]:font-bold">
              Id
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/tr" + restPath} className="[&.active]:font-bold">
              Tr
            </Link>
          </div>
        </div>
        <div className={styles.lang}>
          <div>
            <Link to={"/hi" + restPath} className="[&.active]:font-bold">
              Hi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangSelect;
