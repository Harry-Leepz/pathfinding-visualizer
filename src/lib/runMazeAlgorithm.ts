import { runBinaryTreeMaze } from "./algorithms/maze/binaryTree";
import recursiveDivision from "./algorithms/maze/recursiveDivision";
import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import constructBorder from "./helpers/constructBorder";
import type { Grid, Maze, Speed, Tile } from "./types";

type runMazeAlgorithmProps = {
  maze: Maze;
  grid: Grid;
  startTile: Tile;
  endTile: Tile;
  setIsDisabled: (disabled: boolean) => void;
  speed: Speed;
};

export async function runMazeAlgorithm({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}: runMazeAlgorithmProps) {
  if (maze === "BINARY_TREE") {
    await runBinaryTreeMaze(grid, startTile, endTile, setIsDisabled, speed);
  } else if (maze === "RECURSIVE_DIVISION") {
    const currentSpeed = SPEEDS.find((s) => s.value === speed)!.value ?? 2;

    await constructBorder(grid, startTile, endTile);
    console.log("MAX", MAX_ROWS, MAX_COLS);
    console.log("GRID", grid.length, grid[0].length);
    await recursiveDivision({
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
      row: 1,
      col: 1,
      height: Math.floor((MAX_ROWS - 1) / 2),
      width: Math.floor((MAX_COLS - 1) / 2),
    });

    const lastInteriorRow = MAX_ROWS - 2;
    const lastInteriorCol = MAX_COLS - 2;

    let rowWalls = 0;
    for (let c = 1; c <= lastInteriorCol; c++) {
      if (grid[lastInteriorRow][c].isWall) rowWalls++;
    }

    let colWalls = 0;
    for (let r = 1; r <= lastInteriorRow; r++) {
      if (grid[r][lastInteriorCol].isWall) colWalls++;
    }

    console.log("walls on last interior row:", rowWalls);
    console.log("walls on last interior col:", colWalls);

    setTimeout(() => {
      setIsDisabled(false);
    }, 800 * currentSpeed);
  }
}
