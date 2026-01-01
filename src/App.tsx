import { PathfindingProvider } from "./context/pathfinding/PathfindingProvider";
import { TileProvider } from "./context/tile/TileProvider";
import { SpeedProvider } from "./context/speed/SpeedProvider";

import GridContainer from "./components/grid";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className='h-screen w-screen flex flex-col'>
              <Navigation />
              <GridContainer />
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}

export default App;
