import { Line } from '@react-three/drei'

export default function ConcentratedForces({pos, type, obj, scale = 0.4}) {
    
    const { value, loadX, loadY, loadZ, indient} = obj;
    let x, y, z;
    let end, start;

    if(pos[1][0]){
        [x, y, z] = pos[1];
        end = pos[1];
        start = pos[0]
    } else {
        [x, y, z] = pos; 
        end = pos
        start = pos
    }
    
    const a =[ [-0.2, 0.2, 0], [0, 0, 0 ] ];
    const b =[ [0, 0, 0 ], [0, 0.4, 0 ] ];
    const c =[ [0.2, 0.2, 0 ], [0, 0, 0 ] ];

    const xDiff = end[0] - start[0];
    const yDiff = end[1] - start[1];
    const zDiff = end[2] - start[2];
 
    const lenghtOfKernel = Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff);

    const xIndex = (xDiff / lenghtOfKernel).toFixed(2);
    const yIndex = (yDiff / lenghtOfKernel).toFixed(2);
    const zIndex = (zDiff / lenghtOfKernel).toFixed(2);

    isNaN(indient * xIndex) ? x = x : x = x - (indient * xIndex);
    isNaN(indient * yIndex) ? y = y : y = y - (indient * yIndex);
    isNaN(indient * zIndex) ? z = z : z = z - (indient * zIndex);

    let result = [];

    function arrow(rotatate) {
        
        return(
            <mesh 
            rotation={rotatate} 
            key={'someline'+rotatate} 
            scale={[ scale, scale, scale ]} 
            position={type == 'node' ?[0,0,0] :[x, y, z]}>
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

    if( loadX ) {
        result.push(arrow([0, 0, 1.5708]))
    } if ( loadY ) {
        result.push(arrow([0, 0, 0]))
    } if ( loadZ ) {
        result.push(arrow([1.5708, 1.5708, 0]))
    }
    
    return(
        <mesh>
           {result} 
        </mesh>
    )
        
    
}