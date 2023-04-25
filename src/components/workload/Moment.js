import React from 'react';
import { CubicBezierLine, Line } from '@react-three/drei';

export default function Moment ({position, type, indient}) {
    const points =[[0, 0, 0], [0, -0.5, 0]];
    const pointA = [[0.1, 0.5, 0],[ -0.1, 0.6, 0]];
    const pointB = [[0.1, 0.5, 0],[ -0.1, 0.4, 0]];

    if(type == 'node'){
        return(
            <mesh position={[0,0,0]} scale={0.3}>
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

    const start = position[0];
    const end = position[1];

    const xDiff = end[0] - start[0];
    const yDiff = end[1] - start[1];
    const zDiff = end[2] - start[2];

    let [x, y, z] = position[1];

    const lenghtOfKernel = Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff); 

    const xIndex = (xDiff / lenghtOfKernel).toFixed(2);
    const yIndex = (yDiff / lenghtOfKernel).toFixed(2);
    const zIndex = (zDiff / lenghtOfKernel).toFixed(2);


    return(
        <mesh position={[x - xIndex * indient, y - yIndex * indient, z - zIndex * indient]} scale={0.3}>
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