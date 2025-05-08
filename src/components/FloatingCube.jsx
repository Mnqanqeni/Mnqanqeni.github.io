import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function FloatingCube({ position, label, color = 'skyblue' }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
    ref.current.rotation.y = t;
    ref.current.rotation.x = t * 0.5;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text position={[0, 0, 0.6]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
}
