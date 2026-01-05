import type { MouseEventHandler } from "react";

import { FaPlay } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

type PlayButtonProps = {
  handleRunVisualization: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  isGraphVisualized: boolean;
};

export default function PlayButton({
  handleRunVisualization,
  disabled,
  isGraphVisualized,
}: PlayButtonProps) {
  return (
    <button
      onClick={handleRunVisualization}
      disabled={disabled}
      className='disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-600 border-none active:ring-green-950 focus:outline-none focus:ring focus:ring-green-950 focus:ring-opcity-30 cursor-pointer'
    >
      {isGraphVisualized ? (
        <GrPowerReset className='h-5 w-5' />
      ) : (
        <FaPlay className='h-5 w-5' />
      )}
    </button>
  );
}
