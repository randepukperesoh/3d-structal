import React from 'react';
import {Canvas} from '@react-three/fiber';
import Dot from './Dot'
import Kernel from './Kernel';
import Controls from './Controls'
import {useSelector} from 'react-redux'

export default function Area() {
    const nodes = useSelector(state => state.nodes.nodes);
    //console.log(Object.values(nodes).map(item => {
    //    return Object.values(item)
    //}))
    const k = Object.values(nodes).map(item => { return Object.values(item) })

    let arrNode = nodes.map(function(dot) {
        return <Dot key={dot.id} position={[dot.x, dot.y, dot.z]}/>
    });
    let arrKernel = (
        <Kernel points={k}/>
    ) 
    
    return(
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [25, 0, 25] }}>
            <Controls/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[10, 10, 10]}/>
            <gridHelper args={[20, 20, 0xff0000, 'teal']} />
            {arrNode}
            {arrKernel}
            
        </Canvas>
    )
}