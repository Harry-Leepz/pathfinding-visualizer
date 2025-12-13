import { useState } from "react";
import { PathfindingContext } from "./PathfindingContext";
import { createGrid } from "../../lib/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../../lib/constants";

import type { ReactNode } from "react";
import type { Algorithm, Maze, Grid } from "../../lib/types";

export function PathfindingProvider({ children }: { children: ReactNode }) {
  const [algorithm, setAlgorithm] = useState<Algorithm>("BFS");
  const [maze, setMaze] = useState<Maze>("NONE");
  const [grid, setGrid] = useState<Grid>(
    createGrid(START_TILE_CONFIG, END_TILE_CONFIG)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
}
