// GolfBallCSG.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  MeshStandardMaterial,
  SphereGeometry,
  Mesh,
  Vector3,
} from 'three';
import { Brush, Evaluator, SUBTRACTION } from 'three-bvh-csg';

function GolfBallCSG() {
  const [resultMesh, setResultMesh] = useState(null);
  const { scene } = useThree();

  useEffect(() => {
    const baseMaterial = new MeshStandardMaterial({ color: 'white' });

    // Base golf ball sphere
    const sphere = new Mesh(new SphereGeometry(1, 64, 64), baseMaterial);
    sphere.updateMatrixWorld();
    const baseBrush = new Brush(sphere.geometry);
    baseBrush.updateMatrixWorld();

    const evaluator = new Evaluator();
    let result = baseBrush;

    // Dimple grid
    const dimpleRadius = 0.05;
    const dimpleDistance = 0.25;

    const dimpleGeo = new SphereGeometry(dimpleRadius, 16, 16);

    const dimples = [];
    for (let theta = 0; theta < Math.PI; theta += dimpleDistance) {
      for (let phi = 0; phi < Math.PI * 2; phi += dimpleDistance) {
        const x = Math.sin(theta) * Math.cos(phi);
        const y = Math.cos(theta);
        const z = Math.sin(theta) * Math.sin(phi);

        const pos = new Vector3(x, y, z).multiplyScalar(1 - dimpleRadius / 2);
        const dimple = new Mesh(dimpleGeo.clone(), baseMaterial);
        dimple.position.copy(pos);
        dimple.lookAt(0, 0, 0);
        dimple.updateMatrixWorld();

        const dimpleBrush = new Brush(dimple.geometry);
        dimpleBrush.position.copy(pos);
        dimpleBrush.updateMatrixWorld();

        result = evaluator.evaluate(result, dimpleBrush, SUBTRACTION);
      }
    }

    // Resulting mesh
    const finalMesh = new Mesh(result.geometry, baseMaterial);
    finalMesh.castShadow = true;
    finalMesh.receiveShadow = true;

    setResultMesh(finalMesh);
    scene.add(finalMesh);

    return () => {
      scene.remove(finalMesh);
    };
  }, [scene]);

  return null;
}

export default function GolfBallScene() {
  return (
    <div className="w-full h-screen bg-gray-200">
      <Canvas camera={{ position: [0, 0, 3] }} shadows>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={1} castShadow />
        <GolfBallCSG />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
