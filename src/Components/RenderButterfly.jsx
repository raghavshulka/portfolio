
"use client"
import React, { Suspense } from 'react'
import {Butterfly} from '../Components/Butterfly'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

const RenderButterfly = () => {
  return (
    <Canvas  flat linear className=' flex justify-center items-center  '
    // style={{ width: "50vw", height: "85vh" }}
    >
        <Suspense fallback={<>......</>}>
        <ambientLight intensity={1} />
        <Butterfly />
        </Suspense>
        <Environment preset='city' />
        {/* <OrbitControls  /> */}
        </Canvas>
  )
}


export default RenderButterfly