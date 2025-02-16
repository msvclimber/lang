import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/en/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <div className={styles.blockList}>
        <BlockLink to="/en/phrases" title="Фразы" />
        <BlockLink to="/en/alphabet" title="Алфавит" />
        <BlockLink to="/en/pronouns" title="Местоимения" />
      </div>
    </div>
  );
}
