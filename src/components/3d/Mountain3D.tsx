import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Mountain3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  // Create mountain geometry
  const mountainGeometry = new THREE.ConeGeometry(8, 12, 8);
  
  return (
    <>
      {/* Main mountain peak */}
      <mesh ref={meshRef} position={[0, 0, 0]} geometry={mountainGeometry}>
        <meshStandardMaterial 
          color="#e8f4ff" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Secondary peaks */}
      <mesh position={[-15, -2, 5]} geometry={new THREE.ConeGeometry(6, 10, 8)}>
        <meshStandardMaterial 
          color="#f0f8ff" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      <mesh position={[12, -1, 8]} geometry={new THREE.ConeGeometry(7, 11, 8)}>
        <meshStandardMaterial 
          color="#e8f4ff" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Ground/Snow base */}
      <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#ffffff"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
    </>
  );
};