import type { AlgorithmSelection, MazeSelection, SpeedSelection } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIG = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIG = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: Infinity,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const BASE_TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-slate-400 ";

export const TRAVERSED_TILE_STYLE = BASE_TILE_STYLE + "bg-cyan-400";

export const START_TILE_STYLE =
  BASE_TILE_STYLE +
  " bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.7)]";

export const END_TILE_STYLE =
  BASE_TILE_STYLE +
  " bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.7)]";

export const WALL_TILE_STYLE = BASE_TILE_STYLE + "bg-slate-400 opacity-90";

export const PATH_TILE_STYLE = BASE_TILE_STYLE + "bg-yellow-400";

export const MAZES: MazeSelection[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
  { name: "Binary Tree", value: "BINARY_TREE" },
];

export const SPEEDS: SpeedSelection[] = [
  { name: "Fast", value: 0.5 },
  { name: "Normal", value: 1 },
  { name: "Slow", value: 2 },
];

export const PATHFINDING_ALGORITHMS: AlgorithmSelection[] = [
  { name: "Dijkstra's", value: "DIJKSTRA" },
  { name: "A*", value: "ASTAR" },
  { name: "Breadth-First Search", value: "BFS" },
  { name: "Depth-First Search", value: "DFS" },
];

export const SLEEP_TIME = 8;
