import { twMerge } from "tailwind-merge";

import { usePathfinding } from "../../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../../lib/constants";

import Tile from "../tile";

import { useState, type RefObject } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../../lib/helpers";

type GridProps = {
  isVisualizationActiveRef?: RefObject<boolean>;
};

export default function Grid({ isVisualizationActiveRef }: GridProps) {
  const { grid, setGrid } = usePathfinding();

  const [isMouseDown, setIsMouseDown] = useState(false);

  function handleMouseDown(row: number, col: number) {
    if (isVisualizationActiveRef?.current || checkIfStartOrEnd(row, col))
      return;
    setIsMouseDown(true);

    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  }

  function handleMouseUp(row: number, col: number) {
    if (isVisualizationActiveRef?.current || checkIfStartOrEnd(row, col))
      return;
    setIsMouseDown(false);
  }

  function handleMouseEnter(row: number, col: number) {
    if (isVisualizationActiveRef?.current || checkIfStartOrEnd(row, col))
      return;

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  }

  return (
    <div
      className={twMerge(
        // base classes
        "flex flex-col items-center justify-center border-sky-800",

        // control grid height
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,

        // control grid width
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className='flex'>
          {r.map((tile, tileIndex) => {
            const { row, col, isStart, isEnd, isWall, isTraversed, isPath } =
              tile;

            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isStart={isStart}
                isEnd={isEnd}
                isWall={isWall}
                isTraversed={isTraversed}
                isPath={isPath}
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseUp={() => handleMouseUp(row, col)}
                handleMouseEnter={() => handleMouseEnter(row, col)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
