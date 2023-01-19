import React from 'react';
import { Canvas } from '@react-three/fiber';
import Dot from './Dot'
import Kernel from './Kernel';
import Controls from './Controls'
import GridPlane from './GridPlane'
import { useSelector, useDispatch } from 'react-redux'
import { addNode } from '../store/Slice';

export default function Area() {
    const nodes = useSelector(state => state.nodes.nodes);
    const kernels = useSelector(state => state.nodes.kernels)
    const dispatch = useDispatch();

    let arrKernels = kernels.map( ( kernel ) => <Kernel key = { kernel.id + 'K' } startEnd = { kernel }/>)

    let arrNode  = nodes.map( ( dot ) => <Dot key = { dot.id } id = { dot.id } pos = { [ dot.x, dot.y, dot.z ] }/>)

    function getPoint(e) {
        let x = Math.floor(e.point.x);
        let y = Math.floor(e.point.y);
        let z = Math.floor(e.point.z);
        dispatch(addNode({x: x, y: 0, z: z}))
    }

    return(
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 10] }}>
            <Controls/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <mesh position={[0, -0.0001, 0]} onClick={(e) => getPoint(e)}>
                <boxGeometry attach="geometry" args={[40, 0.0001, 40]} />
            </mesh>
            <GridPlane/>
            {arrNode}
            {arrKernels}
        </Canvas>
    )
}