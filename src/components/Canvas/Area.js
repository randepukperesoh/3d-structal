import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Dot from './Dot'
import Kernel from './Kernel';
import Controls from './Controls'
import GridPlane from './GridPlane'
import { useSelector, useDispatch } from 'react-redux'
import { addKernel, addNode } from '../store/Slice';

export default function Area() {
    const nodes = useSelector(state => state.nodes.nodes);
    const kernels = useSelector(state => state.nodes.kernels)
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch();

    

    let arrKernels = kernels.map( ( kernel ) => <Kernel key = { kernel.id + 'K' } startEnd = { kernel }/>)

    let arrNode  = nodes.map( ( dot ) => <Dot key = { dot.id } id = { dot.id } pos = { [ dot.x, dot.y, dot.z ] }/>)

    function createNode(e) {
        if( config.mouseType === 'node' ) {
            let x = Math.round(e.point.x);
            let z = Math.round(e.point.z);
            dispatch(addNode({x: x, y: 0, z: z}))
        }

        if (config.mouseType === 'square'){

            let x1 = Math.round( e.point.x );
            let z1 = Math.round( e.point.z );
            let x2 = x1 + 1;
            let z2 = z1;

            dispatch(addNode({x: x1, y: 0, z: z1}));
            dispatch(addNode({x: x2, y: 0, z: z2}));
            dispatch(addNode({x: x1, y: 1, z: z1}));
            dispatch(addNode({x: x2, y: 1, z: z2}));

            let n = nodes.at(-1).id;

            let squareNode = [n + 1, n + 2, n + 3, n + 4];

            dispatch(addKernel({start: squareNode[0], end: squareNode[1]}));
            dispatch(addKernel({start: squareNode[0], end: squareNode[2]}));
            dispatch(addKernel({start: squareNode[3], end: squareNode[2]}));
            dispatch(addKernel({start: squareNode[3], end: squareNode[1]}));

        }
        
        if (config.mouseType === 'triangle') {
            let x1 = Math.round( e.point.x );
            let z1 = Math.round( e.point.z );
            let x2 = x1 + 1;
            let z2 = z1;
            
            dispatch(addNode({x: x1, y: 0, z: z1}));
            dispatch(addNode({x: x2, y: 0, z: z2}));
            dispatch(addNode({x: (x1 + x2) / 2, y: 1, z: (z1 + z2) / 2}));

            let n = nodes.at(-1).id;
            
            let triangleNode = [n + 1, n + 2, n + 3];

            dispatch(addKernel({start: triangleNode[0], end: triangleNode[1]}));
            dispatch(addKernel({start: triangleNode[1], end: triangleNode[2]}));
            dispatch(addKernel({start: triangleNode[2], end: triangleNode[0]}));
        }
    }

    return(
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [7, 5, 0] }}>
            <Controls />
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <mesh position={[0, -0.0001, 0]} onClick={(e) => createNode(e)}>
                <boxGeometry attach="geometry" args={[40, 0.0001, 40]} />
            </mesh>
            <GridPlane/>
            {arrNode}
            {arrKernels}
        </Canvas>
    )
}