import { PathfindingProvider } from "./context/pathfinding/PathfindingProvider";

function App() {
  return (
    <>
      <PathfindingProvider>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </PathfindingProvider>
    </>
  );
}

export default App;
