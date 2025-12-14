import { createContext } from "react";

import type { Speed } from "../../lib/types";

type TSpeedContext = {
  speed: Speed;
  setSpeed: (speed: Speed) => void;
}

export const SpeedContext = createContext<TSpeedContext | undefined>(undefined);
