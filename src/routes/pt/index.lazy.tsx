import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/pt/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Португальский" />
      <div className={styles.blockList}>
        <BlockLink to="/pt/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
