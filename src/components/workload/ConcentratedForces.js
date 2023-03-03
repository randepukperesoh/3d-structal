import React from 'react';
import { useSelector} from 'react-redux'
import SingleArrow from './SingleArrow';

export default function ConcentratedForces({s, e}) {
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
    
    let res = arrForArrows.map( (arr, i) => <SingleArrow 
        scale={0.5}
        key={i*Math.random()*100+' Arrow'}
        rotation={
            {
            x: 0,
            y: 0,
            z: 0
            }
        } 
        position={arr}
    /> )

    return (
        <>
            {res}
        </>
    );
};
