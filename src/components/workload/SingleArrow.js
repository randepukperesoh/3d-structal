import { Line } from '@react-three/drei'

export default function SingleArrow({position, scale = 1}) {

    let [x, y, z] = position;

    const a =[ [-0.2, 0.2, 0], [0, 0, 0 ] ];
    const b =[ [0, 0, 0 ], [0, 0.4, 0 ] ];
    const c =[ [0.2, 0.2, 0 ], [0, 0, 0 ] ];

    return(
        <mesh scale={[ scale, scale, scale ]} position={[x, y, z]}>
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