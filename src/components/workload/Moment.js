import React from 'react';
import * as THREE from 'three';
import { CubicBezierLine, CatmullRomLine, Line, Ring } from '@react-three/drei';

export default function Moment () {
    const points =[[0, 0, 0], [0, -0.5, 0]];
    const pointA = [[0.1, 0.5, 0],[ -0.1, 0.6, 0]];
    const pointB = [[0.1, 0.5, 0],[ -0.1, 0.4, 0]];
    return(
        <mesh position={[1, 1, 0]} scale={0.3}>
            <Line
                points={points}
            />
            <Line
                points={pointA}
            />
            <Line
                points={pointB}
            />
            <CubicBezierLine
                start={[0, -0.5, 0]}
                end={[0.1, 0.5, 0]}
                midA={[-0.64, -0.5, 0]} 
                midB={[-1.28, 0.6, 0]} 
                color="black"    
                lineWidth={1}    
                dashed={false}   
            />
        </mesh>
        
    )
}