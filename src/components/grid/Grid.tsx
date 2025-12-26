import { twMerge } from "tailwind-merge";

import { usePathfinding } from "../../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../../lib/constants";

import Tile from "../tile";

export default function Grid() {
  const { grid } = usePathfinding();

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
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='flex'>
          {row.map((tile, colIndex) => {
            const { isStart, isEnd, isWall, isTraversed, isPath } = tile;

            return (
              <Tile
                row={rowIndex}
                col={colIndex}
                isStart={isStart}
                isEnd={isEnd}
                isWall={isWall}
                isTraversed={isTraversed}
                isPath={isPath}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
