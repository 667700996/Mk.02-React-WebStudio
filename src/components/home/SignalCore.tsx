'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

type SignalCoreProps = {
  scrollProgress: MotionValue<number>;
};

const vertexShader = `
  uniform float uTime;
  varying vec3 vNormalW;
  varying vec3 vPosition;

  void main() {
    vec3 p = position;
    float waveA = sin(p.y * 4.4 + uTime * 1.2) * 0.075;
    float waveB = sin(p.x * 5.6 - uTime * 0.9) * 0.045;
    float waveC = cos((p.z + p.y) * 5.0 + uTime) * 0.035;
    p += normal * (waveA + waveB + waveC);

    vec4 worldPosition = modelMatrix * vec4(p, 1.0);
    vPosition = worldPosition.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec3 vNormalW;
  varying vec3 vPosition;

  void main() {
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - max(dot(viewDirection, vNormalW), 0.0), 2.4);
    float bands = sin(vPosition.y * 5.0 + vPosition.x * 2.2 - uTime) * 0.5 + 0.5;
    vec3 violet = vec3(0.35, 0.16, 0.96);
    vec3 acid = vec3(0.78, 1.0, 0.15);
    vec3 blue = vec3(0.04, 0.22, 0.95);
    vec3 color = mix(violet, blue, bands);
    color = mix(color, acid, fresnel * 0.7);
    color += fresnel * 0.55;
    gl_FragColor = vec4(color, 0.98);
  }
`;

function Core({ scrollProgress }: SignalCoreProps) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const dust = useRef<THREE.Points>(null);

  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const particles = useMemo(() => {
    const data = new Float32Array(720 * 3);
    for (let index = 0; index < 720; index += 1) {
      const radius = 2.1 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      const polar = Math.acos(2 * Math.random() - 1);
      data[index * 3] = radius * Math.sin(polar) * Math.cos(angle);
      data[index * 3 + 1] = radius * Math.cos(polar);
      data[index * 3 + 2] = radius * Math.sin(polar) * Math.sin(angle);
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();
    if (material.current) material.current.uniforms.uTime.value = elapsed;
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        state.pointer.y * 0.16 + scrollProgress.get() * 0.8,
        0.035,
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        -state.pointer.x * 0.13 + scrollProgress.get() * 0.7,
        0.035,
      );
    }
    if (dust.current) {
      dust.current.rotation.y = elapsed * 0.025;
      dust.current.rotation.z = -elapsed * 0.012;
    }
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.28, 0.025);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.2, 0.025);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <group ref={group} rotation={[0.1, -0.4, 0.2]}>
        <mesh>
          <icosahedronGeometry args={[1.46, 5]} />
          <shaderMaterial
            ref={material}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms}
          />
        </mesh>
        <mesh rotation={[1.1, 0.2, 0.4]}>
          <torusGeometry args={[1.92, 0.008, 8, 180]} />
          <meshBasicMaterial color="#d9ff3f" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[0.25, 1.1, 0.9]}>
          <torusGeometry args={[2.2, 0.006, 8, 180]} />
          <meshBasicMaterial color="#8a5cff" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[1.6, 0.65, -0.2]}>
          <torusGeometry args={[2.5, 0.004, 8, 180]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.22} />
        </mesh>
      </group>

      <points ref={dust}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#cbd6ff" size={0.018} transparent opacity={0.6} sizeAttenuation />
      </points>
    </>
  );
}

export default function SignalCore({ scrollProgress }: SignalCoreProps) {
  return (
    <Canvas
      className="cx-canvas"
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.55]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Core scrollProgress={scrollProgress} />
    </Canvas>
  );
}
