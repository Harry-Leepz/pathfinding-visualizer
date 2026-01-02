import { BASE_TILE_STYLE, SPEEDS } from "../constants";
import type { Grid, Speed } from "../types";
import sleep from "./sleep";

export default async function destroyWall(
  grid: Grid,
  row: number,
  col: number,
  isRight: number,
  speed: Speed
) {
  if (isRight && grid[row][col + 1]) {
    grid[row][col + 1].isWall = false;
    document.getElementById(`${row}-${col + 1}`)!.className = BASE_TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  } else if (grid[row + 1]) {
    grid[row + 1][col].isWall = false;
    document.getElementById(`${row + 1}-${col}`)!.className = BASE_TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  } else {
    grid[row][col].isWall = false;
    document.getElementById(`${row}-${col}`)!.className = BASE_TILE_STYLE;
    await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5);
  }
}
