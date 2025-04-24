import { Canvas } from "@react-three/fiber";
import Meteor from "./Meteor";
import { useRef } from "react";

function generateMeteorProps() {
  // Spawn either from right, top-right, or top of screen
  const spawnEdge = Math.floor(Math.random() * 3); // 0=right, 1=top-right, 2=top
  
  let startX, startY;
  const viewportWidth = 20; // Approximate viewport width in 3D units
  const viewportHeight = 15; // Approximate viewport height in 3D units
  
  switch(spawnEdge) {
    case 0: // Right side
      startX = viewportWidth * 0.6 + Math.random() * viewportWidth * 0.4;
      startY = (Math.random() * viewportHeight * 2) - viewportHeight * 0.5;
      break;
    case 1: // Top-right corner
      startX = viewportWidth * 0.5 + Math.random() * viewportWidth * 0.5;
      startY = viewportHeight * 0.5 + Math.random() * viewportHeight * 0.5;
      break;
    case 2: // Top side
      startX = (Math.random() * viewportWidth * 2) - viewportWidth * 0.5;
      startY = viewportHeight * 0.5 + Math.random() * viewportHeight * 0.5;
      break;
  }

  return {
    startX,
    startY,
    startZ: Math.random() * -5 - 2, // Random depth
    speed: 0.05 + Math.random() * 0.1,
    size: 0.05 + Math.random() * 0.1,
    roughness: 0.3 + Math.random() * 0.5,
  };
}

export default function MeteorCanvas() {
  const directionalLightRef = useRef();
  const meteorArray = Array.from({ length: 10 }, generateMeteorProps); 

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight 
        ref={directionalLightRef}
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
      />
      {meteorArray.map((props, index) => (
        <Meteor key={index} {...props} directionalLightRef={directionalLightRef} />
      ))}
    </Canvas>
  );
}