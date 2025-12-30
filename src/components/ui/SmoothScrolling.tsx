'use client';

import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ duration: 0.6, wheelMultiplier: 1.2, smoothWheel: true }}>
      <>{children}</>
    </ReactLenis>
  );
}
