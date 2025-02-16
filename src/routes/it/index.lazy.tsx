import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/it/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <div className={styles.blockList}>
        <BlockLink to="/it/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
