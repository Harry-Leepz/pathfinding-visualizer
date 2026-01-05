export type Algorithm = "DIJKSTRA" | "ASTAR" | "BFS" | "DFS";

export type AlgorithmSelection = {
  name: string;
  value: Algorithm;
};

export type Maze = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export type MazeSelection = {
  name: string;
  value: Maze;
};

export type Speed = 2 | 1 | 0.5; // 2x, 1x, 0.5x speed

export type SpeedSelection = {
  name: string;
  value: Speed;
};

export type Tile = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isStart: boolean;
  isTraversed: boolean;
  parent: Tile | null;
};

export type Grid = Tile[][];
