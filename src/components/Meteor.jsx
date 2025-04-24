import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Meteor({ startX, startY, startZ, speed, size, roughness, directionalLightRef }) {
  const ref = useRef();
  const lightRef = useRef();
  const materialRef = useRef();

  // Calculate lighting effects based on directional light
  const updateLighting = () => {
    if (!directionalLightRef.current || !ref.current || !materialRef.current) return;
    
    const meteorPosition = new THREE.Vector3();
    ref.current.getWorldPosition(meteorPosition);
    
    const lightPosition = new THREE.Vector3();
    directionalLightRef.current.getWorldPosition(lightPosition);
    
    // Calculate direction from light to meteor
    const direction = meteorPosition.clone().sub(lightPosition).normalize();
    const meteorNormal = new THREE.Vector3(0, -1, 0).applyQuaternion(ref.current.quaternion);
    
    // Dot product determines how directly the light hits the meteor
    const dot = meteorNormal.dot(direction);
    const lightIntensity = Math.max(0, dot);
    
    // Adjust material properties based on light
    materialRef.current.emissiveIntensity = lightIntensity * 0.5;
    materialRef.current.emissive.setHex(0xffaa33).multiplyScalar(lightIntensity);
    
    // Adjust point light intensity
    if (lightRef.current) {
      lightRef.current.intensity = 3 + lightIntensity * 5;
      lightRef.current.color.setHSL(0.1, 1, 0.5 + lightIntensity * 0.5);
    }
  };

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x -= speed;
      ref.current.position.y -= speed * 0.5;

      if (ref.current.position.x < -30 || ref.current.position.y < -400) {
        ref.current.position.set(startX, startY, startZ);
      }
    }

    updateLighting();
  });

  return (
    <group ref={ref} position={[startX, startY, startZ]} rotation={[0, 0, -Math.PI / 4]}>
      {/* Meteor body (trail) */}
      <mesh>
        <cylinderGeometry args={[0.002, size * 0.5, 1.5, 16]} />
        <meshStandardMaterial 
          color="white" 
          transparent 
          opacity={0.3}
          emissive={0xffaa33}
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Meteor head */}
      <mesh position={[0, -0.8, 0]}>
        <tetrahedronGeometry args={[size]} />
        <meshStandardMaterial 
          ref={materialRef}
          color="lightgray" 
          metalness={0.2} 
          roughness={roughness}
          emissive={0xffaa33}
          emissiveIntensity={0}
        />
        
        {/* Light attached to the meteor head */}
        <pointLight
          ref={lightRef}
          intensity={3}
          color={0xffaa33}
          distance={20 + size * 100}
          decay={2}
          position={[0, 0, 0]}
        />
      </mesh>
    </group>
  );
}