import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/ja/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <div className={styles.blockList}>
        <BlockLink to="/ja/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
