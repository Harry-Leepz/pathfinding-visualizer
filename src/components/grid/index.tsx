import { useRef } from "react";
import Grid from "./Grid";

export default function GridContainer() {
  const isVisualizationActiveRef = useRef(false)

  return (
    <div className='h-screen w-screen flex flex-col'>
      <Grid isVisualizationActiveRef={isVisualizationActiveRef} />
    </div>
  );
}
