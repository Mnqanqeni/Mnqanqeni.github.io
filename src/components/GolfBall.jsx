// src/components/GolfBall.js
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import bumpTextureUrl from '../assets/logos/logo.png';

function GolfBallMesh({ golfProp }) {
    const meshRef = useRef();
    const bumpMap = useTexture(bumpTextureUrl);

    const canvasTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#00ffff');
        gradient.addColorStop(1, '#141819');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create texture now
        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = 16;

        // Load icon for label
        const labelIcon = new Image();
        labelIcon.src = golfProp.label;

        labelIcon.onload = () => {
            ctx.drawImage(labelIcon, 100, 150, 200, 200); // Label on left

            ctx.fillStyle = '#fff';
            ctx.font = 'bold 120px Arial';
            ctx.fillText(golfProp.value, 612, 280); // Value directly opposite
            texture.needsUpdate = true;
        };
        return texture;
    }, [golfProp.value]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]} /> {/* Slightly larger */}
            <meshStandardMaterial
                map={canvasTexture}
                bumpMap={bumpMap}
                bumpScale={0.1}
                metalness={0.2}
                roughness={0.7}
            />
        </mesh>
    );
}

export default function GolfBall({ golfProp }) {
    return (
        <div className="w-30 h-30 md:w-96 md:h-96 p-2">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 5]} intensity={1.2} />
                <GolfBallMesh golfProp={golfProp} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
}
