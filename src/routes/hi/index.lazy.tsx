import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/hi/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Хинди" />
      <div className={styles.blockList}>
        <BlockLink to="/hi/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
