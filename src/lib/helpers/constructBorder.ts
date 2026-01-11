import { MAX_COLS, MAX_ROWS, SLEEP_TIME, WALL_TILE_STYLE } from "../constants";
import { isEqualTiles } from "../helpers";
import type { Grid, Tile } from "../types";
import sleep from "./sleep";

export default async function constructBorder(
  grid: Grid,
  startTile: Tile,
  endTile: Tile
) {
  const shape = [
    { row: 0, col: 1 }, // right
    { row: 1, col: 0 }, // down
    { row: 0, col: -1 }, // left
    { row: -1, col: 0 }, // up
  ];

  let row = 0;
  let col = 0;

  for (let i = 0; i < 4; i++) {
    const directtion = shape[i];

    while (
      row + directtion.row >= 0 &&
      row + directtion.row < MAX_ROWS &&
      col + directtion.col >= 0 &&
      col + directtion.col < MAX_COLS
    ) {
      row += directtion.row;
      col += directtion.col;

      if (
        !isEqualTiles(grid[row][col], startTile) &&
        !isEqualTiles(grid[row][col], endTile)
      ) {
        grid[row][col].isWall = true;
        const tileElement = document.getElementById(`${row}-${col}`);
        if (tileElement) {
          tileElement.classList.add(
            ...WALL_TILE_STYLE.split(" "),
            "animate-wall"
          );
        }

        await sleep(SLEEP_TIME);
      }
    }
  }

  if (row < 0) row = 0;
  if (row >= MAX_ROWS) row = MAX_ROWS - 1;
  if (col < 0) col = 0;
  if (col >= MAX_COLS) col = MAX_COLS - 1;
}
