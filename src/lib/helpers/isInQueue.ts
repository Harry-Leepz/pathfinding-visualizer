import { isEqualTiles } from "../helpers";
import type { Tile } from "../types";

export default function isInQueue(tile: Tile, queue: Tile[]) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqualTiles(tile, queue[i])) return true;
  }
  return false;
}
