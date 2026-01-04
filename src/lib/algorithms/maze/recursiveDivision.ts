import horizontalDivision from "./horizontalDivision";
import verticalDivision from "./verticalDivision";

import type { Grid, Speed, Tile } from "../../types";

type recursiveDivisionParams = {
  grid: Grid;
  startTile: Tile;
  endTile: Tile;
  setIsDisabled: (disabled: boolean) => void;
  speed: Speed;
  row: number;
  col: number;
  height: number;
  width: number;
};

export default async function recursiveDivision({
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
  row,
  col,
  height,
  width,
}: recursiveDivisionParams) {
  if (height <= 1 || width <= 1) return;

  if (height > width) {
    await horizontalDivision({
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
      row,
      col,
      height,
      width,
    });
  } else {
    await verticalDivision({
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
      row,
      col,
      height,
      width,
    });
  }
}
