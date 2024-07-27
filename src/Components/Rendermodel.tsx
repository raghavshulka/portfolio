"use client";
import React, { Suspense } from "react";
import { Model } from "@/model";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const Rendermodel = () => {
  return (
    <Canvas antialias={true}>
      <Suspense fallback={<>...........</>}>
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 2 - 0.1}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minAzimuthAngle={-0.1}
          maxAzimuthAngle={0.1}
        />
        <Model />
        <Environment preset="park" />
      </Suspense>
    </Canvas>
  );
};

export default Rendermodel;
