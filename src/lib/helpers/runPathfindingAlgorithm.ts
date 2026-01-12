import breadthFirstSearch from "../algorithms/pathfinding/bfs";
import depthFirstSearch from "../algorithms/pathfinding/dfs";
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
      return breadthFirstSearch(grid, startTile, endTile);
    case "DFS":
      return depthFirstSearch(grid, startTile, endTile);
    default:
      return breadthFirstSearch(grid, startTile, endTile);
  }
}
