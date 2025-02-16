import { createLazyFileRoute } from "@tanstack/react-router";

import Grid from "@/shared/ui/Grid";

import styles from "./styles.module.scss";

import en from "@/mock/units_en";
import es from "@/mock/units_es";
import it from "@/mock/units_it";
import ja from "@/mock/units_ja";
import zh from "@/mock/units_zh";

const units = en.map((word: { ru: string, word: string, tr: string }, i: number) => ([
  { label: `${i +1}.`, caption: " " },
  { label: word.ru, caption: " " },
  { label: word.word, caption: word.tr },
  { label: es[i]?.word ?? " ", caption: es[i]?.tr ?? " " },
  { label: it[i]?.word ?? " ", caption: it[i]?.tr ?? " " },
  { label: ja[i]?.word ?? " ", caption: ja[i]?.tr ?? " " },
  { label: zh[i]?.word ?? " ", caption: zh[i]?.tr ?? " " },
]));

export const Route = createLazyFileRoute("/unit/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Grid className={styles.grid} data={units} />
    </div>
  );
}
