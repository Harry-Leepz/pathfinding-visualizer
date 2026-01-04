import recursiveDivision from "./recursiveDivision";

import { isEqualTiles } from "../../helpers";
import getRandomNumber from "../../helpers/getRandomNumber";
import sleep from "../../helpers/sleep";

import { SPEEDS, WALL_TILE_STYLE } from "../../constants";
import type { Grid, Tile, Speed } from "../../types";

type horizontalDivisionMazeParams = {
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

export default async function horizontalDivision({
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
  row,
  col,
  height,
  width,
}: horizontalDivisionMazeParams) {
  const makeWallAt = row + getRandomNumber(0, height - 1) * 2 + 1;
  const makePassageAt = col + getRandomNumber(0, width) * 2;

  for (let i = 0; i < 2 * width - 1; i++) {
    if (makePassageAt !== col + i) {
      if (
        !isEqualTiles(grid[makeWallAt][col + i], startTile) ||
        !isEqualTiles(grid[makeWallAt][col + i], endTile)
      ) {
        grid[makeWallAt][col + i].isWall = true;

        document.getElementById(
          `${makeWallAt}-${col + i}`
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
    height: (makeWallAt - row + 1) / 2,
    width,
  });

  await recursiveDivision({
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed,
    row,
    col,
    height: height - (makeWallAt - row + 1) / 2,
    width,
  });
}
