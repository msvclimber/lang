import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";
import BlockTitle from "@/shared/ui/BlockTitle";

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
      <BlockTitle title="Ссылки" rootClassName={styles.linksBlock}>
        <ul>
          <li>
            <a
              href="https://www.oxfordlearnersdictionaries.com/about/oxford3000"
              target="_blanck"
            >
              Oxford 3000
            </a>
          </li>
          <li>
            <a
              href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000"
              target="_blanck"
            >
              Oxford 3000 and 5000 words
            </a>
          </li>
        </ul>
      </BlockTitle>
    </div>
  );
}
