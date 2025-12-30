'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MouseTrailer() {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailer
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const trailerX = useSpring(mouseX, springConfig);
  const trailerY = useSpring(mouseY, springConfig);

  // Slight rotation based on velocity (optional "fluid" feel)
  // We can't easily get velocity from useMotionValue directly without a custom hook, 
  // so we'll keep it simple but physics-based for now.

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor (Tiny Dot) - follows instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Fluid Trailer - follows with physics */}
      <motion.div
        className="fixed top-0 left-0 border border-white/30 rounded-full pointer-events-none z-[9999] backdrop-invert backdrop-blur-[1px]"
        style={{
          x: trailerX,
          y: trailerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 64 : 24,
          height: isHovering ? 64 : 24,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          borderWidth: isHovering ? '0px' : '1px',
          scale: isActive ? 0.8 : 1,
        }}
        transition={{
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
}