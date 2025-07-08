import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating snow particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 40,
              Math.random() * 20 + 5,
              (Math.random() - 0.5) * 40
            ]}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="white" opacity={0.8} transparent />
          </mesh>
        </Float>
      ))}
      
      {/* Floating crystals */}
      {Array.from({ length: 8 }, (_, i) => (
        <Float
          key={`crystal-${i}`}
          speed={0.5 + Math.random()}
          rotationIntensity={1}
          floatIntensity={1}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              Math.random() * 15 + 8,
              (Math.random() - 0.5) * 30
            ]}
          >
            <octahedronGeometry args={[0.5]} />
            <meshStandardMaterial 
              color="#87ceeb" 
              transparent
              opacity={0.7}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};