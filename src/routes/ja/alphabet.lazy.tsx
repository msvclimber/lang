import { createLazyFileRoute } from "@tanstack/react-router";

import type { IGridCell } from "@/shared/ui/Grid/types";

import Grid from "@/shared/ui/Grid";

import styles from "./styles.module.scss";

export const Route = createLazyFileRoute("/ja/alphabet")({
  component: RouteComponent,
});

const jaAlphabet: IGridCell[][] = [
  [
    { label: "ん", caption: "n" },
    { label: "わ", caption: "wa" },
    { label: "ら", caption: "ra" },
    { label: "や", caption: "ya" },
    { label: "ま", caption: "ma" },
    { label: "は", caption: "ha" },
    { label: "な", caption: "na" },
    { label: "た", caption: "ta" },
    { label: "さ", caption: "sa" },
    { label: "か", caption: "ka" },
    { label: "あ", caption: "a" },
  ],
  [
    { label: " " },
    { label: " " },
    { label: "り", caption: "ri" },
    { label: " " },
    { label: "み", caption: "mi" },
    { label: "ひ", caption: "hi" },
    { label: "に", caption: "ni" },
    { label: "ち", caption: "chi" },
    { label: "し", caption: "shi" },
    { label: "き", caption: "ki" },
    { label: "い", caption: "i" },
  ],
  [
    { label: " " },
    { label: " " },
    { label: "る", caption: "ru" },
    { label: "ゆ", caption: "yu" },
    { label: "む", caption: "mu" },
    { label: "ふ", caption: "fu" },
    { label: "ぬ", caption: "nu" },
    { label: "つ", caption: "tsu" },
    { label: "す", caption: "su" },
    { label: "く", caption: "ku" },
    { label: "う", caption: "u" },
  ],
  [
    { label: " " },
    { label: " " },
    { label: "れ", caption: "re" },
    { label: " " },
    { label: "め", caption: "me" },
    { label: "へ", caption: "he" },
    { label: "ね", caption: "ne" },
    { label: "て", caption: "te" },
    { label: "せ", caption: "se" },
    { label: "け", caption: "ke" },
    { label: "え", caption: "e" },
  ],
  [
    { label: " " },
    { label: "を", caption: "wo" },
    { label: "ろ", caption: "ro" },
    { label: "よ", caption: "yo" },
    { label: "も", caption: "mo" },
    { label: "ほ", caption: "ho" },
    { label: "の", caption: "no" },
    { label: "と", caption: "to" },
    { label: "そ", caption: "so" },
    { label: "こ", caption: "ko" },
    { label: "お", caption: "o" },
  ],
];

function RouteComponent() {
  return (
    <div>
      <h2>Хирагана</h2>
      <Grid className={styles.grid} data={jaAlphabet} />
    </div>
  );
}
