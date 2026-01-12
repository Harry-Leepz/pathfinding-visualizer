import { isEqualTiles } from "../helpers";

import type { Tile } from "../types";

export default function checkStack(tile: Tile, stack: Tile[]) {
  for (let i = 0; i < stack.length; i++) {
    if (isEqualTiles(tile, stack[i])) return true;
  }

  return false;
}
