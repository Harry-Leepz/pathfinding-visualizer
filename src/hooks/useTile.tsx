import { useContext } from "react";

import { TileContext } from "../context/tile/TileContext";

export function useTile() {
  const context = useContext(TileContext);

  if (!context) {
    throw new Error("useTile must be used within a TileProvider");
  }

  return context;
}
