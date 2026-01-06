import type { Algorithm, Grid, Tile } from "../types";

type runPathfindingAlgorithmParams = {
  algorithm: Algorithm;
  grid: Grid;
  startTile: Tile;
  endTile: Tile;
};

export default function runPathfindingAlgorithm({
  algorithm,
  grid,
  startTile,
  endTile,
}: runPathfindingAlgorithmParams) {
  switch (algorithm) {
    case "BFS":
      // Call BFS algorithm implementation
      break;
    case "DFS":
      // Call DFS algorithm implementation
      break;
    case "DIJKSTRA":
      // Call Dijkstra's algorithm implementation
      break;
    case "ASTAR":
      // Call A* algorithm implementation
      break;
    default:
      return;
  }
}
