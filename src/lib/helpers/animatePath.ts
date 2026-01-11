import {
  SLEEP_TIME,
  SPEEDS,
  TRAVERSED_TILE_STYLE,
  EXTENDED_SLEEP_TIME,
  PATH_TILE_STYLE,
} from "../constants";
import { isEqualTiles } from "../helpers";
import type { Tile } from "../types";

export default function animatePath(
  traversedTiles: Tile[],
  path: Tile[],
  startTile: Tile,
  endTile: Tile,
  speed: number
) {
  for (let i = 0; i < traversedTiles.length; i++) {
    setTimeout(() => {
      const tile = traversedTiles[i];
      if (!isEqualTiles(tile, startTile) && !isEqualTiles(tile, endTile)) {
        document.getElementById(
          `${tile.row}-${tile.col}`
        )!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
      }
    }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value);
  }

  setTimeout(() => {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const tile = path[i];
        if (!isEqualTiles(tile, startTile) && !isEqualTiles(tile, endTile)) {
          document.getElementById(
            `${tile.row}-${tile.col}`
          )!.className = `${PATH_TILE_STYLE} animate-path`;
        }
      }, EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value);
    }
  }, SLEEP_TIME * traversedTiles.length * SPEEDS.find((s) => s.value === speed)!.value);
}
