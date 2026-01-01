import { useRef } from "react";
import Grid from "./Grid";

export default function GridContainer() {
  const isVisualizationActiveRef = useRef(false);

  return (
    <>
      <Grid isVisualizationActiveRef={isVisualizationActiveRef} />
    </>
  );
}
