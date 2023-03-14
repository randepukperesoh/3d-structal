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
 
    const lenghtOfKernel = Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff);

    const xIndex = (xDiff / lenghtOfKernel).toFixed(2);
    const yIndex = (yDiff / lenghtOfKernel).toFixed(2);
    const zIndex = (zDiff / lenghtOfKernel).toFixed(2);
    
    let numberOfArrows = lenghtOfKernel * 6;
    //console.log(numberOfArrows, (lenghtOfKernel -1) * 6 )
    const xStep = xDiff / numberOfArrows;
    const yStep = yDiff / numberOfArrows;
    const zStep = zDiff / numberOfArrows;

    numberOfArrows = numberOfArrows - ((obj.indientStart + obj.indientEnd) * 6)

    const arrForArrows= [[start.x, start.y, start.z]];

    for(let i = 1; i < numberOfArrows ; i++) {
        arrForArrows.push([arrForArrows[i-1][0] + xStep, arrForArrows[i-1][1] + yStep, arrForArrows[i-1][2] + zStep ])
    }

    arrForArrows.shift(); 
    
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
            <mesh key={i + arrow} scale={[ scale, scale, scale ]} position={[x + obj.indientStart*xIndex, y + obj.indientStart * yIndex, z + obj.indientStart*zIndex]}>
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
    let scale = 0;

    let ArrowsRes = arrForArrows.map( (arr, i) =>{
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
                points={ [ 
                    [start.x + obj.indientStart*xIndex , start.y + obj.indientStart * yIndex, start.z + obj.indientStart*zIndex], 
                    [start.x + obj.indientStart*xIndex , start.y + obj.indientStart*yIndex + loadsStart, start.z + obj.indientStart*zIndex],
                    [end.x - obj.indientEnd*xIndex , end.y - obj.indientEnd*yIndex + loadEnd, end.z - obj.indientEnd*zIndex], 
                    [end.x - obj.indientEnd*xIndex , end.y - obj.indientEnd*yIndex, end.z - obj.indientEnd*zIndex] ] }/>
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
