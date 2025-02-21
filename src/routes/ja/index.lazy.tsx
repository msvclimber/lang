import { createLazyFileRoute } from "@tanstack/react-router";

import BlockLink from "@/features/BlockLink";
import BlockTitle from "@/shared/ui/BlockTitle";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/ja/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <div className={styles.blockList}>
        <BlockLink to="/ja/alphabet" title="Алфавит" />
      </div>
      <BlockTitle title="Ссылки" rootClassName={styles.linksBlock}>
        <ul>
          <li>
            <a href="https://kanjikana.com/ru/kanji/all" target="_blanck">
              Все дзёё кандзи
            </a>
          </li>
          <li>
            <a href="https://www.jlpt.jp/e/" target="_blanck">
              Сайт по тестированию японского языка en версия
            </a>
          </li>
          <li>
            <a href="https://konnichiwa.ru/" target="_blanck">
              Konnichiwa club - все о Японии
            </a>
          </li>
        </ul>
      </BlockTitle>
    </div>
  );
}
