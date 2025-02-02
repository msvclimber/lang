import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/ja/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Японский" />
      <div className={styles.blockList}>
        <BlockLink to="/ja/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
