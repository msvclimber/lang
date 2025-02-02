import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/tr/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Турецкий" />
      <div className={styles.blockList}>
        <BlockLink to="/tr/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
