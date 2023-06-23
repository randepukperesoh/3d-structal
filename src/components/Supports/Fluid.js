import { Line, Circle } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export default function Fluid() {

    const nodes = [[0, 0, 0], [8, 0, 0]];
    const nodes1 = [[7, 0, 0], [6, -1, 0]];
    const nodes2 = [[6, 0, 0], [5, -1, 0]];
    const nodes3 = [[5, 0, 0], [4, -1, 0]];
    const nodes4 = [[4, 0, 0], [3, -1, 0]];
    const nodes5 = [[3, 0, 0], [2, -1, 0]];
    const nodes6 = [[2, 0, 0], [1, -1, 0]];
    const nodes7 =[[4, 2, 0], [4, 4, 0]]

    let cameraX = useThree().camera
    
    const ref = useRef(null)
    //console.log('Fluid')

    useFrame(() => {
        ref.current.rotation.x = cameraX.rotation.x
        ref.current.rotation.y = cameraX.rotation.y
        ref.current.rotation.z = cameraX.rotation.z
    })
    return(
        <mesh ref={ref} position={[0, -0.25 ,0.2]} scale={0.05} >
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes1} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes2} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes3} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes4} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes5} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes6} 
            />
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes7} 
            />
            <Circle  position={[4, 1, 0]} args={[1,150]}>
                <meshBasicMaterial attach="material" color="black" />
            </Circle>
            <Circle  position={[4, 4, 0]} args={[1,150]}>
                <meshBasicMaterial attach="material" color="black" />
            </Circle>
        </mesh>
    )
}