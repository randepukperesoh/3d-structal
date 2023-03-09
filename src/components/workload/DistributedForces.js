import React from 'react';
import { useSelector} from 'react-redux'
import { Line } from '@react-three/drei'

export default function DistributedForces({s, e, obj }) {
    const nodes = useSelector(state => state.nodes.nodes)
    
    const start = nodes[s];
    const end = nodes[e];

    const loadEnd = obj.loadsStart;
    const loadsStart = obj.loadEnd;
    const xDiff = end.x - start.x;
    const yDiff = end.y - start.y;
    const zDiff = end.z - start.z;
 
    const lenghtOfKernel = Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff) ;
    
    const numberOfArrows = (lenghtOfKernel ) * 6;

    const xStep = xDiff / numberOfArrows;
    const yStep = yDiff / numberOfArrows;
    const zStep = zDiff / numberOfArrows;
        
    const arrForArrows= [[start.x, start.y, start.z]];

    for(let i = 1; i < numberOfArrows ; i++) {
        arrForArrows.push([arrForArrows[i-1][0] + xStep, arrForArrows[i-1][1] + yStep, arrForArrows[i-1][2] + zStep ])
    }

    arrForArrows.shift(); 
    console.log(obj)
    function arrow(position, i, scale) {

        let [x, y, z] = position;

        //if(xDiff == 0) {
        //    z = z + obj.indientStart;
        //} else if ( zDiff) {
        //    x = x + obj.indientStart
        //}
        

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
        let scale = 0;
        if (loadEnd > loadsStart) {
            scale = Math.abs(zStep * 0.5) * (i + 1);
        } if ( loadEnd < loadsStart) {
            scale = 0.5 - Math.abs(zStep * 0.5) * (i + 1);
        } else if (loadEnd === loadsStart) { scale= 0.5}
        return arrow(arr, i, scale)
    })

    function arrowWraper(loadEnd, loadsStart, start, end) {
        if(loadEnd === loadsStart) { 
            loadEnd =0.2; loadsStart =0.2;
        }
        if (loadEnd > loadsStart) {
            loadEnd = 0.2; loadsStart = 0
        } else if ( loadEnd < loadsStart ) {
            loadsStart = 0.2; loadEnd =0 
        }
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
            {arrowWraper(loadEnd, loadsStart, start, end)}
        </>
    );
};
