"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as ramdom from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    ramdom.inSphere(new Float32Array(500), { radius: 1.2 }),
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          size={0.008}
          color="$fff"
          transparent
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};
const StarCanvas = () => (
  <div className="fixed inset-0 z-20 h-auto w-full">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
export default StarCanvas;
