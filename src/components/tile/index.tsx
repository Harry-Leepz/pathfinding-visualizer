import { twMerge } from "tailwind-merge";
import {
  BASE_TILE_STYLE,
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../../lib/constants";

type TileProps = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isTraversed: boolean;
  isPath: boolean;
};

export default function Tile({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isTraversed,
  isPath,
}: TileProps) {
  let tileStyle = BASE_TILE_STYLE;

  if (isStart) {
    tileStyle = START_TILE_STYLE;
  }
  if (isEnd) {
    tileStyle = END_TILE_STYLE;
  }
  if (isWall) {
    tileStyle = WALL_TILE_STYLE;
  }
  if (isPath) {
    tileStyle = PATH_TILE_STYLE;
  }
  if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b " : col === 0 ? "border-l " : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(tileStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
    />
  );
}
