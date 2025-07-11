import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, MeshReflectorMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export const EnhancedMountain3D = () => {
  const mainMountainRef = useRef<THREE.Mesh>(null);
  const secondaryMountainRef = useRef<THREE.Mesh>(null);
  const tertiaryMountainRef = useRef<THREE.Mesh>(null);

  // Create custom mountain geometry with more detail
  const mountainGeometry = useMemo(() => {
    const geometry = new THREE.ConeGeometry(8, 12, 16);
    const positions = geometry.attributes.position.array as Float32Array;
    
    // Add some noise to make it more natural
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      // Add noise based on height
      const noise = (Math.random() - 0.5) * 0.5 * (y / 6 + 1);
      positions[i] += noise;
      positions[i + 2] += noise;
    }
    
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (mainMountainRef.current) {
      mainMountainRef.current.rotation.y = Math.sin(time * 0.1) * 0.05;
    }
    
    if (secondaryMountainRef.current) {
      secondaryMountainRef.current.rotation.y = Math.sin(time * 0.08) * 0.03;
    }
    
    if (tertiaryMountainRef.current) {
      tertiaryMountainRef.current.rotation.y = Math.sin(time * 0.12) * 0.04;
    }
  });

  return (
    <>
      {/* Main mountain peak with enhanced materials */}
      <mesh ref={mainMountainRef} position={[0, 0, 0]} geometry={mountainGeometry} castShadow receiveShadow>
        <meshPhysicalMaterial 
          color="#f0f8ff"
          roughness={0.8}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.1}
          transmission={0.1}
          thickness={1}
        />
        <Sparkles count={50} scale={[15, 20, 15]} size={2} speed={0.3} color="#87ceeb" />
      </mesh>
      
      {/* Secondary peaks with different materials */}
      <mesh 
        ref={secondaryMountainRef} 
        position={[-15, -2, 5]} 
        geometry={new THREE.ConeGeometry(6, 10, 12)} 
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color="#e8f4ff" 
          roughness={0.7}
          metalness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
        <Sparkles count={30} scale={[10, 15, 10]} size={1.5} speed={0.2} color="#b8d4ff" />
      </mesh>
      
      <mesh 
        ref={tertiaryMountainRef} 
        position={[12, -1, 8]} 
        geometry={new THREE.ConeGeometry(7, 11, 14)} 
        castShadow 
        receiveShadow
      >
        <meshStandardMaterial 
          color="#f5f5ff" 
          roughness={0.6}
          metalness={0.15}
          normalScale={new THREE.Vector2(0.5, 0.5)}
        />
        <Sparkles count={40} scale={[12, 16, 12]} size={1.8} speed={0.25} color="#ddeeff" />
      </mesh>
      
      {/* Enhanced ground with reflections */}
      <mesh position={[0, -8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60, 32, 32]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={0.8}
          depthScale={1.5}
          minDepthThreshold={0.2}
          maxDepthThreshold={1.6}
          color="#ffffff"
          metalness={0.3}
          mirror={0.3}
          normalMap={undefined}
          normalScale={new THREE.Vector2(0.1, 0.1)}
        />
      </mesh>
      
      {/* Atmospheric fog/mist */}
      <mesh position={[0, 5, -20]}>
        <planeGeometry args={[80, 30]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Additional atmospheric elements */}
      <mesh position={[-25, 8, -15]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[40, 20]} />
        <meshBasicMaterial 
          color="#e8f4ff" 
          transparent 
          opacity={0.05} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};