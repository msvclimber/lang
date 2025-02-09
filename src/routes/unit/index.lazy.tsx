import { createLazyFileRoute } from "@tanstack/react-router";

import Grid from "@/shared/ui/Grid";

import AppTitle from "@/features/AppTitle";

import styles from "./styles.module.scss";

import en from "@/mock/units_en";
import es from "@/mock/units_es";
import it from "@/mock/units_it";
import ja from "@/mock/units_ja";
import zh from "@/mock/units_zh";

const units = [
  [
    { label: "1.", caption: " " },
    { label: en[0].ru, caption: " " },
    { label: en[0].word, caption: en[0].tr },
    { label: es[0].word, caption: es[0].tr },
    { label: it[0].word, caption: it[0].tr },
    { label: ja[0].word, caption: ja[0].tr },
    { label: zh[0].word, caption: zh[0].tr },
  ],
  [
    { label: "2.", caption: " " },
    { label: en[1].ru, caption: " " },
    { label: en[1].word, caption: en[1].tr },
    { label: es[1].word, caption: es[1].tr },
    { label: it[1].word, caption: it[1].tr },
    { label: ja[1].word, caption: ja[1].tr },
    { label: zh[1].word, caption: zh[1].tr },
  ],
  [
    { label: "3.", caption: " " },
    { label: en[2].ru, caption: " " },
    { label: en[2].word, caption: en[2].tr },
    { label: es[2].word, caption: es[2].tr },
    { label: it[2].word, caption: it[2].tr },
    { label: ja[2].word, caption: ja[2].tr },
    { label: zh[2].word, caption: zh[2].tr },
  ],
  [
    { label: "4.", caption: " " },
    { label: en[3].ru, caption: " " },
    { label: en[3].word, caption: en[3].tr },
    { label: es[3].word, caption: es[3].tr },
    { label: it[3].word, caption: it[3].tr },
    { label: ja[3].word, caption: ja[3].tr },
    { label: zh[3].word, caption: zh[3].tr },
  ],
];

export const Route = createLazyFileRoute("/unit/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AppTitle title="Welcome Words Home!" />
      <Grid className={styles.grid} data={units} />
    </div>
  );
}
