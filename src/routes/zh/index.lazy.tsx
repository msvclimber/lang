import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/zh/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Китайский" />
      <div className={styles.blockList}>
        <BlockLink to="/zh/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
