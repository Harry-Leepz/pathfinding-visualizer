import { useState, type ReactNode } from "react";

import { SpeedContext } from "./SpeedContext";

import type { Speed } from "../../lib/types";

export function SpeedProvider({ children} : { children: ReactNode }) {
  const [speed, setSpeed] = useState<Speed>(0.5);

  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
}