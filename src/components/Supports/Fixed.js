import { Line, Circle } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function Fixed({position}) {

    let [x, y, z] = position;
    const nodes = [[0, 0, 0], [8, 0, 0]];
    const nodes1 = [[7, 0, 0], [6, -1, 0]];
    const nodes2 = [[6, 0, 0], [5, -1, 0]];
    const nodes3 = [[5, 0, 0], [4, -1, 0]];
    const nodes4 = [[4, 0, 0], [3, -1, 0]];
    const nodes5 = [[3, 0, 0], [2, -1, 0]];
    const nodes6 = [[2, 0, 0], [1, -1, 0]];
    const nodes7 =[[2, 0, 0], [3.5, 2, 0]];
    const nodes8 =[[6, 0, 0], [4.5, 2, 0]];

    let cameraX = useThree().camera
    
    const ref = useRef(null)

    useFrame(() => {
        ref.current.rotation.x = cameraX.rotation.x
        ref.current.rotation.y = cameraX.rotation.y
        ref.current.rotation.z = cameraX.rotation.z
    })
    //console.log('Fixed')

    return(
        <mesh ref={ref} scale={0.05} >
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
            <Line
            lineWidth={1}
            color={'black'}
            points={nodes8} 
            />
            <Circle  position={[4, 2.5, 0]} args={[1,150]}>
                <meshBasicMaterial attach="material" color="black" />
            </Circle>
            
        </mesh>
    )
}