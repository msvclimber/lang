import { FC } from "react";
import { Link } from "@tanstack/react-router";

import styles from "./styles.module.scss";

interface IBlockLink {
  title: string;
  to: string;
}

const BlockLink: FC<IBlockLink> = ({ to, title }) => (
  <div className={styles.block}>
    <Link to={to}>{title}</Link>
  </div>
);

export default BlockLink;
