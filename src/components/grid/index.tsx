import Grid from "./Grid";

type GridContainerProps = {
  isVisualizationActiveRef: React.RefObject<boolean>;
};

export default function GridContainer({
  isVisualizationActiveRef,
}: GridContainerProps) {
  return (
    <>
      <Grid isVisualizationActiveRef={isVisualizationActiveRef} />
    </>
  );
}
