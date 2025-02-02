import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/es/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Испанский" />
      <div className={styles.blockList}>
        <BlockLink to="/es/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
