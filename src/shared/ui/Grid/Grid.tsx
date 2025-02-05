import { FC } from "react";
import clsx from "clsx";

import type { IGrid } from "./types";

import style from "./styles.module.scss";

const Grid: FC<IGrid> = ({ className, data }) => {
  return (
    <table className={clsx(style.gridRoot, className)}>
      {data.map((dataRow) => (
        <tr className={style.gridRow}>
          {dataRow.map(({ label, caption }) => (
            <td className={style.gridCell}>
              {label}
              {caption ? <div className="caption">{caption}</div> : null}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Grid;
