import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Loader } from '@react-three/drei';
import { Mountain3D } from './Mountain3D';
import { FloatingElements } from './FloatingElements';
import { isWebGLSupported } from '@/lib/webgl-utils';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
  }, []);

  // Loading state
  if (webglSupported === null) {
    return (
      <div className={`${className} bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Loading 3D scene...</p>
        </div>
      </div>
    );
  }

  // Fallback for unsupported WebGL
  if (!webglSupported) {
    return (
      <div className={`${className} bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🏔️</div>
          <h3 className="text-2xl font-bold mb-2">Mont-Fort Alps</h3>
          <p className="text-sm opacity-80">Premium Alpine Experience</p>
        </div>
      </div>
    );
  }

  // Render 3D scene if WebGL is supported
  try {
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
  } catch (error) {
    console.warn('3D Scene failed to render:', error);
    return (
      <div className={`${className} bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🏔️</div>
          <h3 className="text-2xl font-bold mb-2">Mont-Fort Alps</h3>
          <p className="text-sm opacity-80">Premium Alpine Experience</p>
        </div>
      </div>
    );
  }
};