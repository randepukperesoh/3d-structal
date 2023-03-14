import { Line } from '@react-three/drei'

export default function ConcentratedForces({position, obj, scale = 0.4}) {
    const { value, loadX, loadY, loadZ, indient} = obj;
    let [x, y, z] = position[1];
    const start = position[0];
    const end = position[1];
    

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

    let result = [];
    console.log(loadX, loadY, loadZ)
    function arrow(rotatate) {
        
        return(
            <mesh 
            rotation={rotatate} 
            key={rotatate} 
            scale={[ scale, scale, scale ]} 
            position={[x - (indient * xIndex), y - (indient * yIndex), z - (indient* zIndex)]}>
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