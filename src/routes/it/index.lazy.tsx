import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/it/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Итальянский" />
      <div className={styles.blockList}>
        <BlockLink to="/it/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
