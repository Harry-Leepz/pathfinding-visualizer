import { useState } from "react";

import { TileContext } from "./TileContext";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../../lib/constants";

import type { Tile } from "../../lib/types";

export function TileProvider({ children }: { children: React.ReactNode }) {
  const [startTile, setStartTile] = useState<Tile>(START_TILE_CONFIG);
  const [endTile, setEndTile] = useState<Tile>(END_TILE_CONFIG);

  return (
    <TileContext.Provider
      value={{ startTile, setStartTile, endTile, setEndTile }}
    >
      {children}
    </TileContext.Provider>
  );
}
