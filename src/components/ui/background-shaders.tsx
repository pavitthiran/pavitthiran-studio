"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

/**
 * ULTRA-PERFORMANCE MESH GRADIENT
 * Refined for zero-lag silky smooth animation.
 */
const GradientShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#0a0a0a") },
    uColor2: { value: new THREE.Color("#0d1f0d") },
    uColor3: { value: new THREE.Color("#16a34a") },
    uColor4: { value: new THREE.Color("#22c55e") },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    varying vec2 vUv;

    // ultra-fast hash
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 uv = vUv;
      float t = uTime * 0.1;
      
      // Extremely lightweight fluid motion
      vec2 p = uv * 3.0;
      float n = hash(floor(p + t)) * 0.1; // coarse noise
      n += sin(p.x + t) * cos(p.y - t) * 0.5 + 0.5; // smooth waves
      
      vec3 color = mix(uColor1, uColor2, uv.y + n * 0.2);
      color = mix(color, uColor3, n * 0.4);
      
      // Sublte atmosphere
      color += uColor4 * n * 0.15;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,
}

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { viewport } = useThree()

  // Pre-compiled shader initialization
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as any
      if (material.uniforms) {
        material.uniforms.uTime.value = state.clock.getElapsedTime()
      }
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial 
        args={[GradientShaderMaterial]} 
        transparent 
      />
    </mesh>
  )
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  const count = 50 // Ultra-lite particle count

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return [pos]
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          {...({
            attach: "attributes-position",
            count: count,
            array: positions,
            itemSize: 3,
          } as any)}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#22c55e" 
        transparent 
        opacity={0.15} 
        sizeAttenuation 
      />
    </points>
  )
}

export default function BackgroundShaders() {
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen bg-[#0a0a0a] overflow-hidden pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        dpr={[1, 1]} // Fixed DPR for absolute initial speed
        gl={{ 
          antialias: false, 
          alpha: false, 
          stencil: false, 
          depth: false,
          powerPreference: "high-performance" 
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a0a')
        }}
      >
        <Scene />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
