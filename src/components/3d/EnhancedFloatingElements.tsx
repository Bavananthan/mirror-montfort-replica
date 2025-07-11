import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Trail, Billboard } from '@react-three/drei';
import * as THREE from 'three';

export const EnhancedFloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);
  const crystalRefs = useRef<THREE.Mesh[]>([]);
  
  // Generate ice crystal positions
  const crystalPositions = useMemo(() => {
    return Array.from({ length: 12 }, () => ({
      position: [
        (Math.random() - 0.5) * 35,
        Math.random() * 20 + 8,
        (Math.random() - 0.5) * 35
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.7
    }));
  }, []);

  // Generate aurora-like ribbon positions
  const auroraPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      positions.push([
        Math.cos(angle) * 25,
        15 + Math.sin(angle * 3) * 3,
        Math.sin(angle) * 25
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
    }
    
    // Animate individual crystals
    crystalRefs.current.forEach((crystal, index) => {
      if (crystal) {
        crystal.rotation.x = time * (0.5 + index * 0.1);
        crystal.rotation.y = time * (0.3 + index * 0.05);
        crystal.position.y += Math.sin(time + index) * 0.01;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Enhanced snow particles with trails */}
      {Array.from({ length: 80 }, (_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={0.3}
          floatIntensity={0.8}
        >
          <Trail
            width={0.05}
            length={3}
            color="#ffffff"
            attenuation={(t) => t * t}
          >
            <mesh
              position={[
                (Math.random() - 0.5) * 50,
                Math.random() * 25 + 5,
                (Math.random() - 0.5) * 50
              ]}
            >
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshBasicMaterial 
                color="white" 
                opacity={0.9} 
                transparent
              />
            </mesh>
          </Trail>
        </Float>
      ))}
      
      {/* Enhanced ice crystals with complex geometry */}
      {crystalPositions.map((crystal, i) => (
        <Float
          key={`crystal-${i}`}
          speed={0.5 + Math.random()}
          rotationIntensity={1.2}
          floatIntensity={1.5}
        >
          <mesh
            ref={(el) => {
              if (el) crystalRefs.current[i] = el;
            }}
            position={crystal.position}
            rotation={crystal.rotation}
            scale={crystal.scale}
          >
            <dodecahedronGeometry args={[0.6]} />
            <meshPhysicalMaterial 
              color="#87ceeb" 
              transparent
              opacity={0.8}
              roughness={0.1}
              metalness={0.9}
              transmission={0.3}
              thickness={0.5}
              clearcoat={1}
              clearcoatRoughness={0.1}
              ior={1.4}
              emissive="#001133"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Aurora-like ribbons */}
      {auroraPositions.map((position, i) => (
        <Billboard key={`aurora-${i}`} position={position}>
          <mesh>
            <planeGeometry args={[2, 0.5]} />
            <meshBasicMaterial
              color={new THREE.Color().setHSL(0.6 + Math.sin(i * 0.5) * 0.1, 0.8, 0.7)}
              transparent
              opacity={0.3 + Math.sin(i * 0.2) * 0.2}
              side={THREE.DoubleSide}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </Billboard>
      ))}
      
      {/* Floating ice shards */}
      {Array.from({ length: 15 }, (_, i) => (
        <Float
          key={`shard-${i}`}
          speed={0.8 + Math.random() * 0.5}
          rotationIntensity={2}
          floatIntensity={1}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 40,
              Math.random() * 18 + 10,
              (Math.random() - 0.5) * 40
            ]}
          >
            <coneGeometry args={[0.1, 1.5, 4]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.7}
              roughness={0.2}
              metalness={0.8}
              transmission={0.2}
              ior={1.3}
              emissive="#e8f4ff"
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
      
      {/* Magical orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <Float
          key={`orb-${i}`}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              Math.random() * 12 + 12,
              (Math.random() - 0.5) * 30
            ]}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshPhysicalMaterial
              color="#87ceeb"
              transparent
              opacity={0.6}
              roughness={0}
              metalness={0}
              transmission={1}
              thickness={1}
              ior={1.5}
              emissive="#4a90e2"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};