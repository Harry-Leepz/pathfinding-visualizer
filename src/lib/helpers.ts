import {
  BASE_TILE_STYLE,
  END_TILE_CONFIG,
  MAX_COLS,
  MAX_ROWS,
  START_TILE_CONFIG,
} from "./constants";
import type { Grid, Tile } from "./types";

export function isEqualTiles(tileA: Tile, tileB: Tile) {
  return tileA.row === tileB.row && tileA.col === tileB.col;
}

function createRow(row: number, startTile: Tile, endTile: Tile) {
  const currentRow = [];

  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isStart: row === startTile.row && col === startTile.col,
      isTraversed: false,
      parent: null,
    });
  }

  return currentRow;
}

export function createGrid(startTile: Tile, endTile: Tile) {
  const grid: Grid = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }

  return grid;
}

export function checkIfStartOrEnd(row: number, col: number) {
  // determine if the tile is the start or end tile
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  );
}

export function createNewGrid(grid: Grid, row: number, col: number) {
  // create shallow copy of grid
  const newGrid = grid.slice();

  const newTile = {
    ...newGrid[row][col],
    isWall: !newGrid[row][col].isWall,
  };

  newGrid[row][col] = newTile;

  return newGrid;
}

export function resetGrid({
  grid,
  startTile = START_TILE_CONFIG,
  endTile = END_TILE_CONFIG,
}: {
  grid: Grid;
  startTile?: Tile;
  endTile?: Tile;
}) {
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      const tile = grid[row][col];

      tile.distance = Infinity;
      tile.isPath = false;
      tile.isTraversed = false;
      tile.parent = null;
      tile.isWall = false;

      if (!isEqualTiles(startTile, tile) && !isEqualTiles(endTile, tile)) {
        const tileElement = document.getElementById(`${tile.row}-${tile.col}`);

        if (tileElement) {
          tileElement.className = BASE_TILE_STYLE;
        }

        if (tile.row === MAX_ROWS - 1) {
          tileElement?.classList.add("border-b");
        }

        if (tile.col === MAX_COLS - 1) {
          tileElement?.classList.add("border-l");
        }
      }
    }
  }
}
