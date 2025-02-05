export interface IGridCell {
  label: string;
  caption?: string;
}

export interface IGrid {
  className?: string;
  data: IGridCell[][];
}
