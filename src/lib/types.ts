export type Algorithm = "DIJKSTRA" | "ASTAR" | "BFS" | "DFS";

export type Maze = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

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
