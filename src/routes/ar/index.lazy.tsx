import { createLazyFileRoute } from "@tanstack/react-router";

import AppTitle from "@/features/AppTitle";
import BlockLink from "@/features/BlockLink";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/ar/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Арабский" />
      <div>
        Официальный в: Алжир, Бахрейн, Джибути, Египет, Израиль, Иордания, Ирак,
        Йемен, Катар, Коморы, Кувейт, Ливан, Ливия, Мавритания, Марокко, ОАЭ,
        Оман, Саудовская Аравия, Сирия, Сомали, Судан, Тунис, Чад, Эритрея.
      </div>
      <div className={styles.blockList}>
        <BlockLink to="/ar/alphabet" title="Алфавит" />
      </div>
    </div>
  );
}
