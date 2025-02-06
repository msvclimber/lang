import { createLazyFileRoute } from "@tanstack/react-router";

import Grid from "@/shared/ui/Grid";

import AppTitle from "@/features/AppTitle";

import styles from "./styles.module.scss";

import en from "@/mock/units_en";
import es from "@/mock/units_es";
import it from "@/mock/units_it";
import ja from "@/mock/units_ja";

const units = [
  [
    { label: "1.", caption: " " },
    { label: en[0].ru, caption: " " },
    { label: en[0].word, caption: en[0].tr },
    { label: es[0].word, caption: es[0].tr },
    { label: it[0].word, caption: it[0].tr },
    { label: ja[0].word, caption: ja[0].tr },
  ],
  [
    { label: "2.", caption: " " },
    { label: en[1].ru, caption: " " },
    { label: en[1].word, caption: en[1].tr },
    { label: es[1].word, caption: es[1].tr },
    { label: it[1].word, caption: it[1].tr },
    { label: ja[1].word, caption: ja[1].tr },
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
