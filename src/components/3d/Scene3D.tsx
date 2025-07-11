import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Loader } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { EnhancedMountain3D } from './EnhancedMountain3D';
import { EnhancedFloatingElements } from './EnhancedFloatingElements';
import { ParticleSystem, SnowParticles } from './ParticleSystem';
import { AtmosphericEffects } from './AtmosphericEffects';
import { isWebGLSupported } from '@/lib/webgl-utils';
import * as THREE from 'three';

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
        <Canvas 
          shadows
          camera={{ position: [0, 5, 25], fov: 75 }}
          gl={{ 
            antialias: true, 
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.25
          }}
        >
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 5, 25]} />
            
            {/* Enhanced Lighting Setup */}
            <ambientLight intensity={0.4} color="#b8d4ff" />
            <directionalLight 
              position={[15, 25, 8]} 
              intensity={1.5}
              color="#ffd700"
              castShadow
              shadow-mapSize={[2048, 2048]}
              shadow-camera-far={50}
              shadow-camera-left={-20}
              shadow-camera-right={20}
              shadow-camera-top={20}
              shadow-camera-bottom={-20}
            />
            <directionalLight 
              position={[-10, 15, -8]} 
              intensity={0.8}
              color="#87ceeb"
            />
            <pointLight
              position={[0, 20, 0]}
              intensity={0.5}
              color="#ffffff"
              distance={50}
              decay={2}
            />
            <spotLight
              position={[0, 30, 15]}
              angle={0.3}
              penumbra={0.1}
              intensity={0.8}
              color="#e8f4ff"
              castShadow
            />
            
            {/* Environment and Background */}
            <Environment preset="dawn" background environmentIntensity={0.8} />
            <fog attach="fog" args={['#e8f4ff', 25, 100]} />
            
            {/* Enhanced 3D Elements */}
            <EnhancedMountain3D />
            <EnhancedFloatingElements />
            <ParticleSystem count={3000} />
            <SnowParticles />
            <AtmosphericEffects />
            
            {/* Post-processing Effects */}
            <EffectComposer>
              <Bloom 
                intensity={0.3} 
                luminanceThreshold={0.9} 
                luminanceSmoothing={0.025}
                height={300}
              />
              <DepthOfField
                focusDistance={0.02}
                focalLength={0.05}
                bokehScale={3}
              />
            </EffectComposer>
            
            {/* Enhanced Controls */}
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={15}
              maxDistance={60}
              maxPolarAngle={Math.PI / 2.2}
              autoRotate={true}
              autoRotateSpeed={0.5}
              enableDamping={true}
              dampingFactor={0.05}
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