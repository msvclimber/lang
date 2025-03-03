import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";
import BlockTitle from "@/shared/ui/BlockTitle";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/es/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <div className={styles.blockList}>
        <BlockLink to="/es/alphabet" title="Алфавит" />
      </div>
      <BlockTitle title="Info" rootClassName={styles.linksBlock}>
        <ul>
          <li>
            W и K встречаются очень редко в испанском языке и исключительно в
            заимствованных словах.
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
      </BlockTitle>
    </div>
  );
}
