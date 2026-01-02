import { MAX_COLS, MAX_ROWS } from "../../constants";
import { isEqualTiles } from "../../helpers";
import createWall from "../../helpers/createWall";
import destroyWall from "../../helpers/destroyWall";
import getRandomNumber from "../../helpers/getRandomNumber";
import sleep from "../../helpers/sleep";

import type { Grid, Tile, Speed } from "../../types";

export async function runBinaryTreeMaze(
  grid: Grid,
  startTile: Tile,
  endTile: Tile,
  setIsDisabled: (disabled: boolean) => void,
  speed: Speed
) {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROWS * MAX_COLS);

  for (const row of grid) {
    for (const tile of row) {
      if (tile.row % 2 === 0 || tile.col % 2 === 0) {
        if (!isEqualTiles(tile, startTile) && !isEqualTiles(tile, endTile)) {
          tile.isWall = true;
        }
      }
    }
  }

  for (let row = 1; row < MAX_ROWS; row += 2) {
    for (let col = 1; col < MAX_COLS; col += 2) {
      if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
        continue;
      } else if (row === MAX_ROWS - 2) {
        await destroyWall(grid, row, col, 1, speed);
      } else if (col === MAX_COLS - 2) {
        await destroyWall(grid, row, col, 0, speed);
      } else {
        await destroyWall(grid, row, col, getRandomNumber(0, 2), speed);
      }
    }
  }
  setIsDisabled(false);
}
