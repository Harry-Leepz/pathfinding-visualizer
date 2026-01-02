import { runBinaryTreeMaze } from "./algorithms/maze/binaryTree";
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
  }
}
