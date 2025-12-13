import { createContext } from "react";

import type { Tile } from "../../lib/types";

type TTileContext = {
  startTile: Tile;
  setStartTile: (tile: Tile) => void;
  endTile: Tile;
  setEndTile: (tile: Tile) => void;
};

export const TileContext = createContext<TTileContext | undefined>(undefined);
