"use client"

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Butterfly(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/animated_butterfly.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);
  return (
    <group ref={group}  position={[0, -0.5, 3]}
    scale={0.7}
    {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 3, 0,1]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_55">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Wings}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Material.001"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <group name="Plane_52" />
                  <group name="Plane001_53" />
                  <group name="Plane002_54" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/animated_butterfly.glb");
