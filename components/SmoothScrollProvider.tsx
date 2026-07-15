"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2, wheelMultiplier: 1 }}>
      {children}
    </ReactLenis>
  );
}
