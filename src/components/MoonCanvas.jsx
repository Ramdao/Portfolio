// src/components/MoonCanvas.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

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
      <sphereGeometry args={[2.75, 64, 64]} />
      <meshStandardMaterial map={colorMap} normalMap={normalMap} />
    </mesh>
    <mesh>
    <sphereGeometry args={[2.78, 64, 64]} />
    <meshBasicMaterial color="#88f" transparent opacity={0.15} />
    </mesh>
    </>
  );
}

export default function MoonCanvas() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const size = isMobile ? 300 : 350;

  return (
    <Canvas 
      style={{ 
        width: "40vw", 
        height: "40vw", 
        maxWidth: size, 
        maxHeight: size 
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 2, 5]} intensity={1} />
      <Moon />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
