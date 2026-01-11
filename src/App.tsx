import { useRef } from "react";

import { PathfindingProvider } from "./context/pathfinding/PathfindingProvider";
import { TileProvider } from "./context/tile/TileProvider";
import { SpeedProvider } from "./context/speed/SpeedProvider";

import GridContainer from "./components/grid";
import Navigation from "./components/navigation";

function App() {
  const isVisualizationActiveRef = useRef(false);

  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div
              className='
  h-screen w-screen flex flex-col
  bg-linear-to-br from-slate-900 via-slate-800 to-slate-900
'
            >
              <Navigation isVisualizationActiveRef={isVisualizationActiveRef} />
              <GridContainer
                isVisualizationActiveRef={isVisualizationActiveRef}
              />
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}

export default App;
