import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/fr/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Французский" />
      <div className={styles.blockList}>
        <BlockLink to="/fr/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
