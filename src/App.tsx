import { PathfindingProvider } from "./context/pathfinding/PathfindingProvider";
import { TileProvider } from "./context/tile/TileProvider";
import { SpeedProvider } from "./context/speed/SpeedProvider";

import GridContainer from "./components/grid";

function App() {
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <GridContainer />
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}

export default App;
