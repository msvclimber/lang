import { createLazyFileRoute } from "@tanstack/react-router";

import BlockTitle from "@/shared/ui/BlockTitle";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <BlockTitle title="Ссылки" rootClassName={styles.linksBlock}>
        <ul>
          <li>
            <a href="https://mangafire.to/type/manga" target="_blanck">
              Манга на разных языках
            </a>
          </li>
          <li>
            <a href="https://lhlib.ru/" target="_blanck">
              Библиотека Language Heroes
            </a>
          </li>
        </ul>
      </BlockTitle>
    </div>
  );
}
