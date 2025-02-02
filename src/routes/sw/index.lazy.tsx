import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/sw/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Суахили" />
      <div className={styles.blockList}>
        <BlockLink to="/sw/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
