import { isEqualTiles } from "../../helpers";
import getUntraversedNeighbours from "../../helpers/getUntraversedNeighbours";
import isInQueue from "../../helpers/isInQueue";
import type { Grid, Tile } from "../../types";

export default function breadthFirstSearch(
  grid: Grid,
  startTile: Tile,
  endTile: Tile
) {
  const traversedTiles = [];

  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversed = [base];

  while (unTraversed.length) {
    const tile = unTraversed.shift()!;

    if (tile.isWall) continue;
    if (tile.distance === Infinity) break;

    tile.isTraversed = true;
    traversedTiles.push(tile);

    if (isEqualTiles(tile, endTile)) break;

    const neighbours = getUntraversedNeighbours(grid, tile);

    for (let i = 0; i < neighbours.length; i++) {
      if (!isInQueue(neighbours[i], unTraversed)) {
        const neighbour = neighbours[i];
        neighbour.distance = tile.distance + 1;
        neighbour.parent = tile;
        unTraversed.push(neighbour);
      }
    }
  }

  const path = [];

  let tile = grid[endTile.row][endTile.col];

  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }

  return { traversedTiles, path };
}
