import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Loader } from '@react-three/drei';
import { Mountain3D } from './Mountain3D';
import { FloatingElements } from './FloatingElements';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={className}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 5, 25]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.6} color="#b8d4ff" />
          <directionalLight 
            position={[10, 20, 5]} 
            intensity={1}
            color="#ffd700"
            castShadow
          />
          <directionalLight 
            position={[-10, 10, -5]} 
            intensity={0.5}
            color="#87ceeb"
          />
          
          {/* Environment */}
          <Environment preset="dawn" background />
          
          {/* 3D Elements */}
          <Mountain3D />
          <FloatingElements />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={15}
            maxDistance={50}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};