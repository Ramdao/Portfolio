// src/components/MoonCanvas.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function Moon() {
  const ref = useRef();
  const [colorMap, normalMap] = useTexture([
    "/textures/moon.jpg",
    "/textures/moon_normal.jpg",
  ]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <>
    <mesh ref={ref}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap} />
    </mesh>
    <mesh>
    <sphereGeometry args={[3.03, 64, 64]} />
    <meshBasicMaterial color="#88f" transparent opacity={0.15} />
    </mesh>
    </>
  );
}

export default function MoonCanvas() {
  return (
    <Canvas style={{ width: "40vw", height: "40vw", maxWidth: 350, maxHeight: 350 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 5]} intensity={1} />
      <Moon />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
