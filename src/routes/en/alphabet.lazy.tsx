import { createLazyFileRoute } from "@tanstack/react-router";

import type { IGridCell } from "@/shared/ui/Grid/types";

import Grid from "@/shared/ui/Grid";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/en/alphabet")({
  component: RouteComponent,
});

const jaAlphabet: IGridCell[][] = [
  [
    { label: "Aa", caption: "[eɪ]" },
    { label: "Bb", caption: "[biː]" },
    { label: "Cc", caption: "[siː]" },
    { label: "Dd", caption: "[diː]" },
    { label: "Ee", caption: "[iː]" },
    { label: "Ff", caption: "[ef]" },
    { label: "Gg", caption: "[dʒiː]" },
  ],
  [
    { label: "Hh", caption: "[eɪtʃ]" },
    { label: "Ii", caption: "[aɪ]" },
    { label: "Jj", caption: "[dʒeɪ]" },
    { label: "Kk", caption: "[keɪ]" },
    { label: "Ll", caption: "[el]" },
    { label: "Mm", caption: "[em]" },
    { label: "Nn", caption: "[ɛn]" },
  ],
  [
    { label: "Oo", caption: "[əʊ]" },
    { label: "Pp", caption: "[piː]" },
    { label: "Qq", caption: "[kjuː]" },
    { label: "Rr", caption: "[ɑː, ar]" },
    { label: "Ss", caption: "[es]" },
    { label: "Tt", caption: "[tiː]" },
    { label: "Uu", caption: "[juː]" },
  ],
  [
    { label: "Vv", caption: "[viː]" },
    { label: "Ww", caption: "['dʌbljuː]" },
    { label: "Xx", caption: "[eks]" },
    { label: "Yy", caption: "[waɪ]" },
    { label: "Zz", caption: "[zɛd, ziː]" },
    { label: " " },
    { label: " " },
  ],
];

function RouteComponent() {
  return (
    <div>
      <Grid className={styles.grid} data={jaAlphabet} />
    </div>
  );
}
