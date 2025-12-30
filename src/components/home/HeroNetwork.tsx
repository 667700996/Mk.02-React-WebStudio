'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
// @ts-expect-error - maath types are sometimes tricky with esm imports
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleNetwork(props: React.ComponentProps<typeof Points>) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7ef2c9"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

function ConnectingLines() {
  // This is a simplified "connection" effect using a second layer of larger, sparse points
  // to simulate nodes in a network without heavy line calculation per frame
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(300), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function HeroNetwork() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNetwork />
        <ConnectingLines />
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
           {/* Subtle background glow element */}
           <mesh scale={[4, 4, 1]} position={[0,0,-2]}>
             <planeGeometry />
             <meshBasicMaterial color="#051020" transparent opacity={0.5} />
           </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
