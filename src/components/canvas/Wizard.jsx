/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// eslint-disable-next-line react/prop-types
const Wizard = ({isMobile}) => {
  const wizard_cane = useGLTF("./wizards_cane/scene.gltf")
  const wizard_potions = useGLTF("./wizard_potions/scene.gltf")
  const wizard_hat = useGLTF("./wizards_hat/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[100, 100, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      
      />

      
      <primitive 
        object={wizard_potions.scene}
        scale={isMobile ? 0.07 : 0.08}
        position={[-2, -3.25, -0.75]}
        rotation={[-0.01, -0.2, -0.1]} 
      />
      <primitive 
        object={wizard_cane.scene}
        scale={isMobile ? 2.07 : 2.12}
        position={isMobile ? [1.0, -2.00, -2.3] : [1.0, -2.00, -2.4]}
        rotation={[0, 2.3, 0]} 
      />
      <primitive 
        object={wizard_hat.scene}
        scale={isMobile ? 0.65 : 0.65}
        position={isMobile ? [0.8, 0.10, -2.4]: [0.8, 0.10, -2.5]}
        rotation={[0, 3, -0.5]}
      />
    </mesh>
  );
};

const WizardCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }


  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          
        />
        <Wizard isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default WizardCanvas;
