import { createLazyFileRoute } from "@tanstack/react-router";

import type { IGridCell } from "@/shared/ui/Grid/types";

import Grid from "@/shared/ui/Grid";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/es/alphabet")({
  component: RouteComponent,
});

const jaAlphabet: IGridCell[][] = [
  [
    { label: "Aa", caption: "[]" },
    { label: "Bb", caption: "[]" },
    { label: "Cc", caption: "[]" },
    { label: "Dd", caption: "[]" },
    { label: "Ee", caption: "[]" },
    { label: "Ff", caption: "[]" },
    { label: "Gg", caption: "[]" },
  ],
  [
    { label: "Hh", caption: "[]" },
    { label: "Ii", caption: "[]" },
    { label: "Jj", caption: "[]" },
    { label: "Kk", caption: "[]" },
    { label: "Ll", caption: "[]" },
    { label: "Mm", caption: "[]" },
    { label: "Nn", caption: "[]" },
  ],
  [
    { label: "Ññ", caption: "[]" },
    { label: "Oo", caption: "[]" },
    { label: "Pp", caption: "[]" },
    { label: "Qq", caption: "[]" },
    { label: "Rr", caption: "[]" },
    { label: "Ss", caption: "[]" },
    { label: "Tt", caption: "[]" },
  ],
  [
    { label: "Uu", caption: "[]" },
    { label: "Vv", caption: "[]" },
    { label: "Ww", caption: "[]" },
    { label: "Xx", caption: "[]" },
    { label: "Yy", caption: "[]" },
    { label: "Zz", caption: "[]" },
    { label: " " },
  ],
  [
    { label: "Ch ch", caption: "[]" },
    { label: "Ll ll", caption: "[]" },
    { label: "Qu qu", caption: "[]" },
    { label: "Gu gu", caption: "[]" },
    { label: "rr", caption: "[]" },
    { label: " " },
    { label: " " },
  ],
];

function RouteComponent() {
  return (
    <div>
      <Grid className={styles.grid} data={jaAlphabet} />
      <ul>
        <li>В сочетаниях que,qui,gui,gue - буква u не читается</li>
      </ul>
    </div>
  );
}
