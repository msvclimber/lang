import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/id/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Индонезийский" />
      <div className={styles.blockList}>
        <BlockLink to="/id/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
