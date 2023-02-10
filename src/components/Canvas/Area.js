import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, Stats } from "@react-three/drei";
import Dot from './Dot'
import Kernel from './Kernel';
import Controls from './Controls'
import GridPlane from './GridPlane'
import { useSelector, useDispatch } from 'react-redux'
import createNode from './createNode';
import { addKernel, addNode } from '../store/Slice';
import html2canvas from "html2canvas"

export default function Area() {
    const nodes = useSelector(state => state.nodes.nodes);
    const kernels = useSelector(state => state.nodes.kernels)
    const config = useSelector(state => state.nodes.config)
    const dispatch = useDispatch();

    const cnvs = useRef(null);

    //useEffect( () => {
    //    fetch('http://localhost:8080/')
    //    .then((response) => response.json())
    //    .then((data) => console.log(data));
    //}, [])

    let arrKernels = kernels.map( ( kernel ) => <Kernel key = { kernel.id + 'K' } startEnd = { kernel }/>)

    let arrNode  = nodes.map( ( dot ) => <Dot key = { dot.id } id = { dot.id } pos = { [ dot.x, dot.y, dot.z ] }/>)

    async function handleDownloadImage () {
        const canvas = await html2canvas(cnvs.current),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');
     
        link.href = data;
        link.download = 'downloaded-image.jpg';
     
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <Canvas gl={{ preserveDrawingBuffer: true }} camera={{ fov: 75, near: 0.1, far: 1000, position: [7, 5, 0] }}>
            <Controls />
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <mesh position={[0, -0.0001, 0]} onClick={(e) => createNode(e)}>
                <boxGeometry attach="geometry" args={[40, 0.0001, 40]} />
            </mesh>
            <GridPlane/>
            {arrNode}
            {arrKernels}
            <Html>
                <div onClick={() => handleDownloadImage()} ref={cnvs}> screen</div>
            </Html>
        </Canvas>
    )
}