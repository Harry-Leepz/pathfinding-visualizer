import recursiveDivision from "./recursiveDivision";
import { isEqualTiles } from "../../helpers";
import getRandomNumber from "../../helpers/getRandomNumber";
import sleep from "../../helpers/sleep";

import { SPEEDS, WALL_TILE_STYLE } from "../../constants";
import type { Grid, Tile, Speed } from "../../types";

type verticalDivisionParams = {
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

export default async function verticalDivision({
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
  row,
  col,
  height,
  width,
}: verticalDivisionParams) {
  const makeWallAt = col + getRandomNumber(0, width - 1) * 2 + 1;
  const makePassageAt = row + getRandomNumber(0, height) * 2;

  for (let i = 0; i < 2 * height - 1; i++) {
    if (makePassageAt !== row + i) {
      if (
        !isEqualTiles(grid[row + i][makeWallAt], startTile) &&
        !isEqualTiles(grid[row + i][makeWallAt], endTile)
      ) {
        grid[row + i][makeWallAt].isWall = true;

        document.getElementById(
          `${row + i}-${makeWallAt}`
        )!.className = `${WALL_TILE_STYLE} animate-wall`;
        await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
      }
    }
  }

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed,
    row,
    col,
    height,
    width: (makeWallAt - col + 1) / 2,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed,
    row,
    col: makeWallAt + 1,
    height,
    width: width - (makeWallAt - col + 1) / 2,
  });
}
