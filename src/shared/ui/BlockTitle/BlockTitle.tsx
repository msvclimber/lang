import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface IBlockTitle {
  title: string;
  children: React.ReactNode;
  rootClassName?: string;
}

const BlockTitle: FC<IBlockTitle> = ({ title, children, rootClassName }) => (
  <div className={clsx(styles.blockTitleRoot, rootClassName)}>
    <div>
      <div className={styles.blockTitleTitle}>{title}</div>
      {children}
    </div>
  </div>
);

export default BlockTitle;
