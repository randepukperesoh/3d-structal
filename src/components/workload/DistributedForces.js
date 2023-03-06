import React from 'react';
import { useSelector} from 'react-redux'
import { Line } from '@react-three/drei'

export default function DistributedForces({s, e}) {
    const nodes = useSelector(state => state.nodes.nodes)
    
    const start = nodes[s];
    const end = nodes[e];
   
    const xDiff = end.x - start.x;
    const yDiff = end.y - start.y;
    const zDiff = end.z - start.z;
 
    const lenghtOfKernel = Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff);

    const numberOfArrows = lenghtOfKernel * 3;

    const xStep = xDiff/numberOfArrows;
    const yStep = yDiff/numberOfArrows;
    const zStep = zDiff/numberOfArrows;
    
    const arrForArrows= [[start.x, start.y, start.z]];

    for(let i = 1; i < numberOfArrows ; i++) {
        arrForArrows.push([arrForArrows[i-1][0] + xStep, arrForArrows[i-1][1] + yStep, arrForArrows[i-1][2] + zStep ])
    }

    arrForArrows.shift(); 
    
    function arrow(position, i, scale = 0.5) {
        let [x, y, z] = position;

        const a =[ [-0.2, 0.2, 0], [0, 0, 0 ] ];
        const b =[ [0, 0, 0 ], [0, 0.4, 0 ] ];
        const c =[ [0.2, 0.2, 0 ], [0, 0, 0 ] ];

        return(
            <mesh key={i + arrow} scale={[ scale, scale, scale ]} position={[x, y, z]}>
                <Line
                    lineWidth={1} 
                    color={'black'}
                    points={a} 
                    />
                <Line 
                    lineWidth={1}
                    color={'black'}
                    points={b} 
                    />
                <Line 
                    lineWidth={1}
                    color={'black'}
                    points={c} 
                    />
            </mesh>
        )
    }
    let ArrowsRes = arrForArrows.map( (arr, i) =>{
        return arrow(arr, i)
    })

    function arrowWraper(loadEnd = 12, loadsStart = 21, start, end) {
        if (loadEnd > loadsStart) {
            loadEnd = 0.2; loadsStart = 0
        } else { loadsStart = 0.2; loadEnd =0 }
        
        return(
            <mesh key={Math.sqrt(12) + 'wrapper'}>
                <Line
                points={ [ [start.x, start.y, start.z], 
                    [start.x, start.y + loadsStart, start.z],
                    [end.x, end.y + loadEnd, end.z], [end.x, end.y, end.z] ] }/>
            </mesh>
        )
    }
    
    return (
        <>
            {ArrowsRes}
            {arrowWraper(12, 21, start, end)}
        </>
    );
};
