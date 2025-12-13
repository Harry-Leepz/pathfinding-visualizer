import { PathfindingProvider } from "./context/pathfinding/PathfindingProvider";
import { TileProvider } from "./context/tile/TileProvider";

function App() {
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}

export default App;
