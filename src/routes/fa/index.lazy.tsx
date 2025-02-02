import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/fa/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Персидский" />
      <div className={styles.blockList}>
        <BlockLink to="/fa/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
