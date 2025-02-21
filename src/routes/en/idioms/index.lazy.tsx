import { createLazyFileRoute } from "@tanstack/react-router";

import BlockTitle from "@/shared/ui/BlockTitle";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/en/idioms/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <BlockTitle title="Идиомы" rootClassName={styles.linksBlock}>
        <ul>
          <li>Jump for joy - прыгать от радости</li>
          <li>A piece of cake - проще простого</li>
        </ul>
      </BlockTitle>
    </div>
  );
}
