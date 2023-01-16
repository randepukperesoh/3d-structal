import React, { useState } from 'react';
import {Canvas} from '@react-three/fiber';
import Dot from './Dot'
import Kernel from './Kernel';
import Controls from './Controls'
import {useSelector} from 'react-redux'

export default function Area() {
    const nodes = useSelector(state => state.nodes.nodes);
    const kernels = useSelector(state => state.nodes.kernels)
    const config = useSelector(state => state.nodes.config)

    let arrKernels = kernels.map( (kernel) => <Kernel key = {kernel.id + 'K'} startEnd = {kernel}/>)
    
    let arrNode  = nodes.map( dot => <Dot key = {dot.id} id = {dot.id} pos = { [dot.x, dot.y, dot.z] }/>)

    const yzGrid = (<gridHelper rotation={[Math.PI / 2, 0, 0]} args={[config.meshDivisions, config.meshDivisions, 0xff0000, 'teal']} />);    
    const yxGrid = (<gridHelper  rotation={[0, 0, Math.PI / 2]} args={[config.meshDivisions, config.meshDivisions, 0xff0000, 'teal']} />);
    const xzGrid = (<gridHelper args={[config.meshDivisions, config.meshDivisions, 0xff0000, 'teal']} />)

    return(
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [25, 0, 25] }}>
            <Controls/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            {xzGrid}
            {config.yxGrid? yxGrid : false}
            {config.yzGrid ? yzGrid : false}
            
            {arrNode}
            {arrKernels}
        </Canvas>
    )
}