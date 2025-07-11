import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

export const AtmosphericEffects = () => {
  const cloudsRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  
  // Generate cloud positions
  const cloudPositions = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 60,
        15 + Math.random() * 10,
        -20 - Math.random() * 20
      ] as [number, number, number],
      scale: 3 + Math.random() * 4,
      opacity: 0.1 + Math.random() * 0.1
    }));
  }, []);

  // Generate atmospheric rings
  const ringPositions = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      position: [0, 20 + i * 5, 0] as [number, number, number],
      scale: 20 + i * 10
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (cloudsRef.current) {
      cloudsRef.current.children.forEach((cloud, index) => {
        cloud.position.x += Math.sin(time * 0.1 + index) * 0.02;
        cloud.rotation.y = time * 0.05 + index;
      });
    }
    
    if (ringsRef.current) {
      ringsRef.current.rotation.y = time * 0.1;
      ringsRef.current.children.forEach((ring, index) => {
        ring.rotation.z = time * (0.1 + index * 0.02);
      });
    }
  });

  return (
    <>
      {/* Atmospheric clouds */}
      <group ref={cloudsRef}>
        {cloudPositions.map((cloud, i) => (
          <Sphere
            key={`cloud-${i}`}
            position={cloud.position}
            scale={cloud.scale}
            args={[1, 8, 6]}
          >
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={cloud.opacity}
              side={THREE.DoubleSide}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Energy rings */}
      <group ref={ringsRef}>
        {ringPositions.map((ringData, i) => (
          <Ring
            key={`ring-${i}`}
            position={ringData.position}
            scale={ringData.scale}
            args={[1, 1.1, 32]}
          >
            <meshBasicMaterial
              color={new THREE.Color().setHSL(0.6, 0.8, 0.5)}
              transparent
              opacity={0.1 - i * 0.02}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </Ring>
        ))}
      </group>
      
      {/* Volumetric fog effect */}
      <mesh position={[0, 0, -30]}>
        <boxGeometry args={[100, 50, 20]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Light rays */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh
          key={`ray-${i}`}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 25,
            20,
            Math.sin((i / 12) * Math.PI * 2) * 25
          ]}
          rotation={[0, (i / 12) * Math.PI * 2, 0]}
        >
          <planeGeometry args={[0.5, 15]} />
          <meshBasicMaterial
            color="#ffffaa"
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </>
  );
};