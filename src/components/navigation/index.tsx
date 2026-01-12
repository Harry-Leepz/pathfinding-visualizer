import Select from "./Select";
import { usePathfinding } from "../../hooks/usePathfinding";
import { useTile } from "../../hooks/useTile";

import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../../lib/constants";
import { resetGrid } from "../../lib/helpers";

import type { Algorithm, Maze, Speed } from "../../lib/types";
import { useState } from "react";
import { runMazeAlgorithm } from "../../lib/runMazeAlgorithm";
import { useSpeed } from "../../hooks/useSpeed";
import PlayButton from "./PlayButton";
import runPathfindingAlgorithm from "../../lib/helpers/runPathfindingAlgorithm";
import animatePath from "../../lib/helpers/animatePath";

type NavigationProps = {
  isVisualizationActiveRef: React.RefObject<boolean>;
};

export default function Navigation({
  isVisualizationActiveRef,
}: NavigationProps) {
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
  const { speed, setSpeed } = useSpeed();

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

  function handlerRunVisualization() {
    if (isGraphVisualized) {
      setIsGraphVisualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }

    const { traversedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath(traversedTiles, path, startTile, endTile, speed);

    setIsDisabled(true);

    isVisualizationActiveRef.current = true;

    setTimeout(() => {
      const newGrid = grid.slice();
      setGrid(newGrid);
      setIsGraphVisualized(true);
      setIsDisabled(false);
      isVisualizationActiveRef.current = false;
    }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
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
          <Select
            label='Speed'
            value={speed}
            options={SPEEDS}
            onChange={(e) => {
              setSpeed(Number(e.target.value) as Speed);
            }}
          />
          <PlayButton
            disabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handleRunVisualization={handlerRunVisualization}
          />
        </div>
      </div>
    </div>
  );
}
