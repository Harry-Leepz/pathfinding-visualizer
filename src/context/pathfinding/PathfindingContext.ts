import { createContext } from "react";
import type { Algorithm, Maze, Grid } from "../../lib/types";

export type TPathfindingContext = {
  algorithm: Algorithm;
  setAlgorithm: (algorithm: Algorithm) => void;
  maze: Maze;
  setMaze: (maze: Maze) => void;
  grid: Grid;
  setGrid: (grid: Grid) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
};

export const PathfindingContext = createContext<
  TPathfindingContext | undefined
>(undefined);
