import { FC } from "react";

import styles from "./styles.module.scss";

interface IAppTitle {
  title: string;
}

const AppTitle: FC<IAppTitle> = ({ title }) => (
  <div className={styles.appTitleRoot}>
    <h3>{title}</h3>
  </div>
);

export default AppTitle;
