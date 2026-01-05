import Select from "./Select";
import { usePathfinding } from "../../hooks/usePathfinding";
import { useTile } from "../../hooks/useTile";

import { MAZES, PATHFINDING_ALGORITHMS } from "../../lib/constants";
import { resetGrid } from "../../lib/helpers";

import type { Algorithm, Maze } from "../../lib/types";
import { useState } from "react";
import { runMazeAlgorithm } from "../../lib/runMazeAlgorithm";
import { useSpeed } from "../../hooks/useSpeed";
import PlayButton from "./PlayButton";

export default function Navigation() {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    maze,
    setMaze,
    grid,
    setGrid,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
    isGraphVisualized,
  } = usePathfinding();
  const { startTile, endTile } = useTile();
  const { speed } = useSpeed();

  function handleGenerateMaze(maze: Maze) {
    resetGrid({ grid, startTile, endTile });

    if (maze === "NONE") {
      setMaze(maze);
      return;
    }

    setMaze(maze);
    setIsDisabled(true);

    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });

    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  }

  return (
    <div className='flex items-center justify-center min-h-18 shadow-slate-600 sm:px-5 px-0'>
      <div className='flex items-center lg:justify-between justify-center w-full sm:w-208'>
        <h1 className='lg:flex hidden w-[40%] pl-1 text-2xl font-semibold tracking-wide'>
          <span className='relative bg-linear-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent'>
            Pathfinding Visualizer
            <span className='absolute left-0 -bottom-1 h-0.5 w-full bg-linear-to-r from-slate-400 to-slate-600 rounded-full' />
          </span>
        </h1>

        <div className='flex sm:items-end items-center justify-start sm:justify-between flex-col sm:flex-row sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4'>
          <Select
            label='Maze'
            value={maze}
            options={MAZES}
            onChange={(e) => {
              handleGenerateMaze(e.target.value as Maze);
            }}
          />
          <Select
            label='Graph'
            value={algorithm}
            options={PATHFINDING_ALGORITHMS}
            onChange={(e) => {
              setAlgorithm(e.target.value as Algorithm);
            }}
          />
          <PlayButton
            disabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handleRunVisualization={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
