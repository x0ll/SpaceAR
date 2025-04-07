"use client"

import { useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars, useTexture } from "@react-three/drei"
import { useSpaceObject } from "./space-object-context"

function Planet({ position, texture, size, rotationSpeed, name }) {
  const meshRef = useRef()
  const { setSelectedObject } = useSpaceObject()
  const planetTexture = useTexture(texture)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
    }
  })

  return (
    <mesh ref={meshRef} position={position} onClick={() => setSelectedObject(name)}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  )
}

function CameraController() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 10, 25)
  }, [camera])

  return null
}

export default function SpaceScene() {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        {/* Sun */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshBasicMaterial color="#FDB813" />
          <pointLight intensity={1.5} distance={100} color="#FDB813" />
        </mesh>

        {/* Planets */}
        <Planet
          position={[8, 0, 0]}
          texture="/placeholder.svg?height=256&width=256"
          size={1}
          rotationSpeed={0.01}
          name="Earth"
        />
        <Planet
          position={[-10, 1, 5]}
          texture="/placeholder.svg?height=256&width=256"
          size={1.5}
          rotationSpeed={0.005}
          name="Mars"
        />
        <Planet
          position={[5, -2, -8]}
          texture="/placeholder.svg?height=256&width=256"
          size={2}
          rotationSpeed={0.003}
          name="Jupiter"
        />

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  )
}

