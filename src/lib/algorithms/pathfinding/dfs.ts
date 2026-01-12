import { isEqualTiles } from "../../helpers";
import checkStack from "../../helpers/checkStack";
import getUntraversedNeighbours from "../../helpers/getUntraversedNeighbours";

import type { Grid, Tile } from "../../types";

export default function depthFirstSearch(
  grid: Grid,
  startTile: Tile,
  endTile: Tile
) {
  const traversedTiles = [];

  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const untraversedTiles = [base];

  while (untraversedTiles.length) {
    const currentTile = untraversedTiles.pop();

    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance === Infinity) break;

      currentTile.isTraversed = true;
      traversedTiles.push(currentTile);

      if (isEqualTiles(currentTile, endTile)) break;

      const neighbours = getUntraversedNeighbours(grid, currentTile);

      for (let i = 0; i < neighbours.length; i++) {
        if (!checkStack(neighbours[i], untraversedTiles)) {
          neighbours[i].distance = currentTile.distance + 1;
          neighbours[i].parent = currentTile;
          untraversedTiles.push(neighbours[i]);
        }
      }
    }
  }

  const path = [];

  let current = grid[endTile.row][endTile.col];

  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }

  return { traversedTiles, path };
}
